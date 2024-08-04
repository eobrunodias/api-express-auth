import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user-model";
import dotenv from "dotenv";

dotenv.config();

function generateToken(userId: number) {
  const secret = process.env.JWT_SECRET || "secret";
  return jwt.sign({ id: userId }, secret, { expiresIn: "1h" });
}

export const AuthUserController = {
  authenticate: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = generateToken(user.id);

      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
