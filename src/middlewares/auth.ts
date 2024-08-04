import { NextFunction, Request, Response } from "express";

type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};

export function auth(req: Request, res: Response, next: NextFunction) {
  const { id, rule } = req.headers;

  if (!id || !rule) {
    return res.status(401).json({ message: "Token is required" });
  }

  if (rule !== "admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}
