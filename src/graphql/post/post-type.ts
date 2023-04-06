import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";

// model 
const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Post type",
  fields: () => ({
    id: globalIdField("Post"),
    title: {
      type: GraphQLString,
      resolve: (post) => post.title,
    },
    body: {
      type: GraphQLString,
      resolve: (post) => post.body,
    },
  }),
});

const { connectionType: PostConnection, edgeType: PostEdge} = connectionDefinitions({
  nodeType: PostType,
});

export {
  PostConnection,
  PostEdge
}

export default PostType;