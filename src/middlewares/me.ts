import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};

export function me(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Token is required" });
  }

  const [, token] = authorization.split(" ");

  try {
    const secret = process.env.JWT_SECRET;

    if (secret) {
      const decoded = jwt.verify(token, secret);

      const { id } = decoded as TokenPayload;

      req.user.userId = id;
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

  next();
}
