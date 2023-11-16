const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

const connectDB = require("../server/config/db");

connectDB().then(() => {
  server
    .listen({ port: 5000 })
    .then((res) => {
      console.log(`Server running at ${res.url}`);
    })
    .catch((error) => {
      console.error(`Error starting Apollo server: ${error}`);
    });
});
