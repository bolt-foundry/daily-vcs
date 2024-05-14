import {
  mutationField,
  nonNull,
  objectType,
  stringArg,
} from "packages/graphql/deps.ts";
import { GraphQLContext } from "packages/graphql/graphql.ts";
import { BfContainerProject } from "packages/bfDb/models/BfContainerProject.ts";

export const BfGraphQLProjectType = objectType({
  name: "BfContainerProject",
  description: "A collection of media and stuff",
  definition(t) {
    t.implements("BfNode");
    t.string("name");
  },
});

export const BfGraphQLProjectMutation = mutationField((t) => {
  t.field("createProject", {
    type: "BfContainerProject",
    args: {
      name: nonNull(stringArg()),
    },
    resolve: async (
      _root,
      { name },
      { bfCurrentViewer }: GraphQLContext,
    ) => {
      const project = await BfContainerProject.create(bfCurrentViewer, {
        name,
      });
      return project.toGraphql();
    },
  });
});
