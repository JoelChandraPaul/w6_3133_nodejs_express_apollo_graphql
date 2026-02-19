import { gql } from 'graphql-tag';import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
    movie_age: Int
  }

  input MovieInput {
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  input MovieUpdateInput {
    name: String
    director_name: String
    production_house: String
    release_date: String
    rating: Float
  }

  type Query {
    getAllMovies: [Movie!]!
    getMovieById(id: ID!): Movie
    getMoviesByDirector(director_name: String!): [Movie!]!
  }

  type Mutation {
    insertMovie(movie: MovieInput!): Movie!
    updateMovie(id: ID!, movie: MovieUpdateInput!): Movie
    deleteMovieById(id: ID!): Boolean!
  }
`;

export default typeDefs;
