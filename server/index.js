const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

require("dotenv").config();

const Post = require("./models/Post");
const { MONGODB } = require("./config.js");

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "hello my friend",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
