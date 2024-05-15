import { interfaceType } from "packages/graphql/deps.ts";
import { BfNodeGraphQLType } from "packages/graphql/types/BfGraphQLNode.ts";

export const BfAssocGraphQLType = interfaceType({
  name: "BfAssoc",
  definition(t) {
    t.implements(BfNodeGraphQLType)
  },
});
