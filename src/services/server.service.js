const express = require('express');
const bodyParser = require('body-parser');
const config = require("../configs");
const port = config.server.port;
const apiRouter = require('../routes');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

const graphQlServer = new ApolloServer({
  // typeDefs -> schemas graphql,
  // resolvers -> resolvers à importer
})
graphQlServer.applyMiddleware({ app, path:'/graphql'})
app.use(bodyParser.json());
app.use('/api/v1/', apiRouter);

exports.start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
  });
};
