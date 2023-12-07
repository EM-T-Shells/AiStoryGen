const User = require('../../models/User');
const {
    ApolloServer,
    gql,
    UserInputError
} = require('apollo-server');
const { ApolloError } = require('apollo-server-errors');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
    Mutation: {
        async registerUser(_, {registerInput: {username, password} }) {
            if (!username || !password) {
                throw new UserInputError('Both username and password are required', {
                  invalidArgs: ['username', 'password'],
                });
            }
            const oldUser = await User.findOne({ username });

            if (oldUser) {
                throw new ApolloError('A user is already registered with the username: ' + username, 'USER_ALREADY_EXISTS');
            }
            
            const encryptedPassword = await bcrypt.hash(password, 10);
            
            const newUser = new User({
                username: username,
                password: encryptedPassword
            });

            const token = jwt.sign(
                { user_id: newUser._id },
                "UNSAFESTRING",
                {
                  expiresIn: "2h",
                }
            );

            newUser.token = token;

            const res = await newUser.save();
            
            return {
                id: res.id,
                username: res.username,
                token: res.token,
            };
        },

        async loginUser(_, {loginInput: {username, password} }) {
            /* Do input validation
            if (!(email && password)) {
                res.status(400).send("All input is required");
            }
            */
            const user = await User.findOne({ username });

            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = jwt.sign(
                  { user_id: user._id },
                  "UNSAFESTRING",
                  {
                    expiresIn: "2h",
                  }
                );
          
                // save user token
                user.token = token;

                return {
                    id: user.id,
                    ...user._doc
                }
            } else {
                throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
            }
        }
    },
    Query: {
        user: (_, {ID}) => User.findById(ID)
    }
}
