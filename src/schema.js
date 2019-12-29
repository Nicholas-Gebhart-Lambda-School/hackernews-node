const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    info: String!
    feed(filter: String, skip: Int, first: Int): [Link!]!
  }

  type Mutation {
    post(url: String!, description: String!): Link!
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    vote(linkId: ID!): Vote
  }

  type Vote {
    id: ID!
    link: Link!
    user: User!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    links: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
    postedBy: User!
    votes: [Vote!]!
  }

  type Subscription {
    newLink: Link
    newVote: Vote
  }
`;

module.exports = typeDefs;
