const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Movie {
    _id ID!
    title: String!
    runtime: Int!
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
    creator: User!
    createdAt: String!
    updatedAt: String!
  }

  type Director {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
    creator: User!
  }

  type Producer {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
    creator: User!
  }

  type Scenarist {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
    creator: User!
  }

  type Music {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
    creator: User!
  }

  type Actor {
    _id: ID!
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
    creator: User!
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

  type MovieData {
    movies: [Movie!]!
    totalMovies: Int!
  }

  type DirectorData {
    directors: [Director!]!
    totalDirectors: Int!
  }
  
  type ProducerData {
    producers: [Producer!]!
    totalProducers: Int!
  }

  type ScenaristData {
    scenarists: [Scenarist!]!
    totalScenarists: Int!
  }

  type MusicData {
    musics: [Music!]!
    totalMusics: Int!
  }

  type ActorData {
    actors: [Actor!]!
    totalActors: Int!
  }

  input UserInputData {
    name: String!
    password: String!
  }

  input MovieInputData {
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

  input DirectorInputData {
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  input ProducerInputData {
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  input ScenaristInputData {
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  input MusicInputData {
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  input ActorInputData {
    firstname: String!
    lastname: String!
    nationality: String!
    movies: [Movie!]!
  }

  type RootQuery {
    login(name: String!, password: String!): AuthData!
    movies(page: Int): MovieData!
    movie(id: ID!): Movie!
    directors(page: Int): DirectorData!
    director(id: ID!): Director!
    producers(page: Int): ProducerData!
    producer(id: ID!): Producer!
    scenarists(page: Int): ScenaristData!
    scenarist(id: ID!): Scenarist!
    musics(page: Int): MusicData!
    music(id: ID!): Music!
    actors(page: Int): ActorData!
    actor(id: ID!): Actor!
    user: User!
  }

  type RootMutation {
    createUser(userInput: UserInputData): User!
    addMovie(movieInput: MovieInputData): Movie!
    addDirector(directorInput: DirectorInputData): Director!
    addProducer(producerInput: ProducerInputData): Producer!
    addScenarist(scenaristInput: ScenaristInputData): Scenarist!
    addMusic(musicInput: MusicInputData): Music!
    addActor(actorInput: ActorInputData): Actor!
    updateMovie(id: ID!, movieInput: MovieInputData): Movie!
    updateDirector(id: ID!, directorInput: DirectorInputData): Director!
    updateproducer(id: ID!, producerInput: ProducerInputData): Producer!
    updateScenarist(id: ID!, scenaristInput: ScenaristInputData): Scenarist!
    updateMusic(id: ID!, musicInput: MusicInputData): Music!
    updateActor(id: ID!, actorInput: ActorInputData): Actor!
    deleteMovie(id: ID!): Boolean
    deleteDirector(id: ID!): Boolean
    deleteProducer(id: ID!): Boolean
    deleteScenarist(id: ID!): Boolean
    deleteMusic(id: ID!): Boolean
    deleteActor(id:ID!): Boolean
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }

`)