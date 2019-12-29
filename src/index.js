const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
  Query: {
    info: () => 'Api is listening',
    feed: () => (root, args, context) => {
      return context.prisma.links();
    },
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      });
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context: { prisma } });

server.listen().then(({ url }) => console.log(url));
