import { NextFunction, Request, Response } from "express";

export function auth(req: Request, res: Response, next: NextFunction) {
  const { id, rule } = req.headers;

  if (!id || !rule) {
    return res.status(401).json({ message: "Token is required" });
  }

  if (rule !== "ADMIN") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}
