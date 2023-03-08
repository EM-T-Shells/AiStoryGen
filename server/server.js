require("dotenv").config();
const key = process.env.API_KEY;

// mongoDB Database connect
const mongoDB_connect = require("./config/db/connection.js");

// graphQL - apollo - tools
const { apolloServerExpress, typeDefs, resolvers } = require("./graphQL");
const graphQL = apolloServerExpress({ typeDefs, resolvers });

// express
const express = require("express");
// const router = require("express-router")
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const app = express()
  //.router(); once routes are finished then can uncomment or else error will ensue

// vroom_vroom-express-initialize
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// connects port
app.listen(PORT, () => {
  mongoDB_connect();
  graphQL.applyMiddleware({ app });
  console.log(`
    ==============================
    "Online at ${PORT}, Server is."
                __.-._
                '-._"7'
                  /'.-c
                  |  /T
                _)_/LI
    ==============================
  `);
});
