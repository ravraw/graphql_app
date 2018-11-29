const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const BooksType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLObjectType },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLObjectType },
    name: { type: GraphQLString },
    age: { type: GraphQLString }
  })
});
