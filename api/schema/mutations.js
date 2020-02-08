const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require("./types/user_type");

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: { email: GraphQLString, password: GraphQLString },
      resolve: (parentValue, args, request) => {}
    }
  }
});

module.exports = mutations;
