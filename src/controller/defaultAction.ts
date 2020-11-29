import { Request, Response } from "express";

export async function defaultAction(req: Request, res: Response) {
  res.status(200).send("hello ts_express");
}
