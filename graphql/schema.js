const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Movie {
    _id ID!
    title: String!
    runtime: Number!
    release: Date!
    country: String!
    rating: String!
    genre: [String!]!
    studio: String!
    staff: {
      director: Director!
      producer: Producer!
      scenarist: Scenarist!
      music: Music!
    }
    casting: [Actor!]!
  }

  type Director {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  type Producer {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  type Scenarist {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  type Music {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  type Actor {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  type User {
    _id: ID!
    name: String!
    password: String!
  }

  type AuthData {
    token: String!
    userId: String!
  }

  input UserInputData {
    name: String!
    password: String!
  }
`)