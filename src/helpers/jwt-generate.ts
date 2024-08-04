import jwt from "jsonwebtoken";

export function generateTokenJWT(userId: number) {
  const secret = process.env.JWT_SECRET || "secret";
  return jwt.sign({ id: userId }, secret, { expiresIn: "1h" });
}
