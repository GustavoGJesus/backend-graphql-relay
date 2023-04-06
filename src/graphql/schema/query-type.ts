import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { connectionArgs, connectionFromArray } from "graphql-relay";
import { PostConnection } from "../post/post-type";

import * as PostLoader from "../post/post-loader";


const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: () => ({
    posts: {
      type: new GraphQLNonNull(PostConnection),
      args: connectionArgs,
      //pagination
      resolve: async (_, args, context) => {
        const data = await PostLoader.loadAll();

        return connectionFromArray(data, args);
      }
    }
  })
}); 

export default QueryType;