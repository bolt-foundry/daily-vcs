import { GraphQLContext } from "packages/graphql/graphql.ts";
import { cookie } from "packages/graphql/deps.ts";
import {
  BfCurrentViewerAccessToken,
  BfCurrentViewerAnon,
} from "packages/bfDb/classes/BfCurrentViewer.ts";
import { BfAccount } from "packages/bfDb/models/BfAccount.ts";
import { getLogger } from "deps.ts";
const logger = getLogger(import.meta);

export async function getContextFromRequest(
  request: Request,
): Promise<GraphQLContext> {
  const cookies = cookie.getCookies(request.headers);
  const accessToken = cookies.BF_AT;
  const refreshToken = cookies.BF_RT;
  const responseHeaders = new Headers();

  let bfCurrentViewer = await BfCurrentViewerAccessToken.create(
    import.meta,
    accessToken,
  );
  // startupBackend();
  if (bfCurrentViewer instanceof BfCurrentViewerAnon && refreshToken) {
    logger.debug("Found refresh token, refreshing access token");
    try {
      const nextAccessToken = await BfAccount.getRefreshedAccessToken(
        import.meta,
        refreshToken,
      );
      responseHeaders.append(
        "Set-Cookie",
        `BF_AT=${nextAccessToken}; HttpOnly; Path=/; Secure; SameSite=Strict`,
      );
      bfCurrentViewer = await BfCurrentViewerAccessToken.create(
        import.meta,
        nextAccessToken,
      );
    } catch {
      logger.error("couldnt refresh access token");
      responseHeaders.append(
        "Set-Cookie",
        `BF_AT=; HttpOnly; Path=/; Secure; SameSite=Strict`,
      );
    }
  }
  return { bfCurrentViewer, responseHeaders };
}
