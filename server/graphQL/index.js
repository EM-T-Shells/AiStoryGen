const { ApolloServerExpress } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const apolloServerExpress = new ApolloServerExpress({
  typeDefs,
  resolvers,
});

apolloServerExpress
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
  .catch((error) => {
    console.log("Error starting server: ", error);
  });

export default { typeDefs, resolvers }

// tools of graphQL library (modules) exported to server file to be used by exprees host . the express host does its thing either at the view (tables) or the database (kitchen). Once the tools have been used on either client or server sided API, those tools return a new state and new rendered component
