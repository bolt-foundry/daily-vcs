import { interfaceType } from "packages/graphql/deps.ts";
import { BfNodeGraphQLType } from "packages/graphql/types/BfGraphQLNode.ts";

export const BfContainerGraphQLType = interfaceType({
  name: "BfContainer",
  definition(t) {
    t.implements(BfNodeGraphQLType)
  },
});
