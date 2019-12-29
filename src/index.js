const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

const links = [
  {
    id: 'link-0',
    url: 'howtographql.com',
    description: 'stack tutorial',
  },
];

const resolvers = {
  Query: {
    info: () => 'Api is listening',
    feed: () => links,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(url));
