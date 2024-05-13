import { React, getLogger } from "deps.ts";
import { ReactDOMServer } from "packages/clientRenderer/deps.ts";
import { BaseComponent } from "packages/clientRenderer/BaseComponent.tsx";
import { Client } from "packages/client/Client.tsx";
import { getEnvironment } from "packages/clientRenderer/relayEnvironment.ts";
import { BfCurrentViewerAccessToken, BfCurrentViewerAnon } from "packages/bfDb/classes/BfCurrentViewer.ts";
import { cookie } from "packages/graphql/deps.ts";
import { BfAccount } from "packages/bfDb/models/BfAccount.ts";

const logger = getLogger(import.meta);

const importableEnvironmentVariables = [
  "GOOGLE_OAUTH_CLIENT_ID",
];

async function clientRendererMain(
  request: Request,
): Promise<Response> {
  const { pathname } = new URL(request.url);
  const environment: Record<string, string | undefined> = {
    pathname,
  };
  importableEnvironmentVariables.forEach((key) => {
    if (key != null) {
      environment[key] = Deno.env.get(key);
    }
  });
  const clientEnvironment = {
    initialPath: pathname,
    ...environment,
    featureFlags: {},
    featureVariants: {},
  };
  const serverRelayEnvironment = getEnvironment();
  // const serverRelayEnvironment = {};
  const serverEnvironment = {
    ...clientEnvironment,
    serverRelayEnvironment,
    POSTHOG_API_KEY: undefined,
    GOOGLE_OAUTH_CLIENT_ID: undefined,
    featureFlags: {},
    featureVariants: {},
    // Adding the missing properties with assumed placeholder values.
    GOOGLE_DEVELOPER_API_KEY: undefined, // Replace `undefined` with the actual key if available
    content: {}, // Assuming an empty object as default, update it as per your requirements
    currentViewer: null, // Assuming `null`, adjust according to your application's user management logic
    phBootstrap: undefined, // Placeholder, set accordingly
  };
  // this is the "frozen in time" render that gets built on the client.
  const serverRenderedClientElement = React.createElement(
    Client,
    serverEnvironment,
    null,
  );
  // this inserts the render into "basecomponent" which is an html template
  // client environment is what we pass to the rehydrate step.
  const el = React.createElement(
    BaseComponent,
    { environment: clientEnvironment },
    serverRenderedClientElement,
  );
  // We then stream down the content as soon as a request comes in.
  const stream = await ReactDOMServer.renderToReadableStream(el);
  return new Response(stream, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}

async function redirectIfNotLoggedIn(request: Request) {
  const deploymentEnvironment = Deno.env.get("BF_ENV") ?? "DEVELOPMENT";
  const redirectDomain = Deno.env.get("BF_AUTH_REDIRECT_DOMAIN") ?? "boltfoundry-wtf.replit.app";
  const { hostname } = new URL(request.url);
  const loggedInRedirectUrl = deploymentEnvironment === "DEVELOPMENT" ? `https://${redirectDomain}/login?hostname=${hostname}` : "/login";
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

  if (bfCurrentViewer instanceof BfCurrentViewerAccessToken) {
    const clientRendererResponse = await clientRendererMain(request);
    clientRendererResponse.headers.append("Set-Cookie", responseHeaders.get("Set-Cookie") ?? "");
    return clientRendererResponse;
  }
  return new Response(null, {
    status: 302,
    headers: {
      Location: loggedInRedirectUrl,
    }
  })
}

export function clientRenderer(allowLoggedOut = false) {
  if (allowLoggedOut) {
    return clientRendererMain;
  }
  return redirectIfNotLoggedIn;
  
}