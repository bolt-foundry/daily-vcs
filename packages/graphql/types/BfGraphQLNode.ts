import { interfaceType } from "packages/graphql/deps.ts";

export const BfNodeGraphQLType = interfaceType({
  name: "BfNode",
  definition(t) {
    t.nonNull.id("id", { description: "Unique identifier for the resource", resolve: (obj) => obj.id ?? obj.bfGid ?? obj.metadata?.bfGid });
  },
});
