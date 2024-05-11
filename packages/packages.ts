#! /usr/bin/env -S deno run -A

const entrypointPath = Deno.env.get("BF_ENTRYPOINT");
if (entrypointPath === undefined) {
  throw new Error("Must define BF_ENTRYPOINT environment variable");
}
await import(entrypointPath);
