import { queryField } from "infra/graphql/deps.ts";
import { BfCurrentViewerAccessTokenInternalAdmin } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfOrganization } from "packages/bfDb/models/BfOrganization.ts";

export const IBfGraphQLOrganizationQuery = queryField((t) => {
  t.connectionField("organizations", {
    type: "BfOrganization",
    resolve: async (_, args, { bfCurrentViewer }) => {
      if (bfCurrentViewer instanceof BfCurrentViewerAccessTokenInternalAdmin) {
        return await BfOrganization.queryConnectionForGraphQL(bfCurrentViewer, {
          bfOid: undefined,
        }, {}, args);
      }
      throw new Error("Not implemented");
    },
  });
});
