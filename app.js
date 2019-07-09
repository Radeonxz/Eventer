const express = require('express');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

// Parse incoming request
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/graphql', graphqlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}));

const MongoDBOptions = {
  useNewUrlParser: true,
  useCreateIndex: true
}

mongoose.connect(process.env.MONGO_URL, MongoDBOptions)
.then(() => {
  app.listen(3000);
}).catch((err) => {
  console.log(err);
});