import { interfaceType } from "packages/graphql/deps.ts";
import { BfNodeGraphQLType } from "packages/graphql/types/BfGraphQLNode.ts";

export const BfMediaGraphQLType = interfaceType({
  name: "BfMedia",
  definition(t) {
    t.implements(BfNodeGraphQLType)
  },
});
