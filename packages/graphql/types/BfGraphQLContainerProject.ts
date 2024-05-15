import {
  queryField,
  mutationField,
  nonNull,
  objectType,
  stringArg,
  idArg,
  GraphQLError,
} from "packages/graphql/deps.ts";
import { GraphQLContext } from "packages/graphql/graphql.ts";
import { BfContainerGraphQLType } from "packages/graphql/types/BfGraphQLContainer.ts"
import { BfContainerProject } from "packages/bfDb/models/BfContainerProject.ts";

export const BfGraphQLProjectType = objectType({
  name: "BfContainerProject",
  description: "A collection of media and stuff",
  definition(t) {
    t.implements(BfContainerGraphQLType);
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

export const containerProject = queryField("containerProject", {
  type: "BfContainerProject",
  args: {
    id: nonNull(idArg()),
  },
  resolve: async (_root, { id }, { bfCurrentViewer }: GraphQLContext) => {
    const project = await BfContainerProject.find(bfCurrentViewer, id);
    if (!project) {
      throw new GraphQLError("Project not found or you don't have access to it.");
    }
    return project.toGraphql();
  },
});