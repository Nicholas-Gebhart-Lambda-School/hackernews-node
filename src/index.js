const { ApolloServer } = require('apollo-server');
const { prisma } = require('./generated/prisma-client');
const typeDefs = require('./schema');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
    };
  },
});

server.listen().then(({ url }) => console.log(url));
