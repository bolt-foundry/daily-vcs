import {
  objectType,
  mutationField,
  nonNull,
  stringArg,
} from "packages/graphql/deps.ts";
import { BfMediaGraphQLType } from "packages/graphql/types/BfGraphQLMedia.ts";
import { GraphQLContext } from "packages/graphql/graphql.ts";
import { BfMediaBffsFile } from "packages/bfDb/models/BfMediaBffsFile.ts";

export const BfMediaBffsFileGraphQLType = objectType({
  name: "BfMediaBffsFile",
  definition(t) {
    t.implements(BfMediaGraphQLType);
  },
});

export const BfMediaBffsFileCreateMutation = mutationField(
  "createBfMediaBffsFile",
  {
    type: BfMediaBffsFileGraphQLType,
    args: {
      name: nonNull(stringArg()),
    },
    resolve: async (
      _root,
      { name },
      { bfCurrentViewer }: GraphQLContext,
    ) => {
      return await BfMediaBffsFile.create(bfCurrentViewer, {
        name,
      })
    },
  },
);
