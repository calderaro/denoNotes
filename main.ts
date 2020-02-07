import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router
  .get("/", ctx => {
    ctx.response.body = "Hello World!";
  })
  .get("/pokemon", async ctx => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
    const data = await response.json();
    ctx.response.body = data;
  });

app.use(router.routes());

await app.listen({ port: 8000 });
