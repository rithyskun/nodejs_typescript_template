import express, { Express, Request, Response } from "express";

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
    res.send("Express + Typescript Server");
  });


export default router