#! /usr/bin/env -S deno run -A

Deno.serve(async (req, info) => {
  info.completed.then(() => {
    console.log("Completed");
  })
  return new Response("yo");
})