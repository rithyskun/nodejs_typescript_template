import express, { Express, Request, Response } from "express";
import config from "config";
import router from "./routes";

const app: Express = express();
const port = config.get<number>("PORT") || 3000;

app.use(router)

app.listen(port, () => {
  console.log(`[server]: Server is running at port: ${port}`);
});
