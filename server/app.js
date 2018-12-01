require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://${process.env.USERNAME}:${
    process.env.PASSWORD
  }@ds123454.mlab.com:23454/graphql`
);
mongoose.connection.once('open', () => {
  console.log('connected to database....');
});

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('App listening on port 4000 ....');
});
