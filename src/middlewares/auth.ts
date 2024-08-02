import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};

export function AuthMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Token is required" });
  }

  const [, token] = authorization.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    const { id } = decoded as TokenPayload;

    req.userId = id;
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

  next();
}
