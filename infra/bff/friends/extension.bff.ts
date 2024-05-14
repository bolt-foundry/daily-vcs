import { build } from "infra/bff/extension/build.ts";
// import { buildRelay } from "infra/bff/friends/relay.bff.ts";
import { register } from "infra/bff/mod.ts";

register("build:extension", "Builds the client.", async (_options) => {
  // await buildRelay();
  await build();
  return 0;
});
