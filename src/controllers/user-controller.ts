import { User } from "../models/user-model";
import { Request, Response } from "express";
import { validatePassword } from "../helpers/validade-password";
import { validateEmail } from "../helpers/validade-email";

const usersController = {
  index: async (req: Request, res: Response) => {
    try {
      const users = await User.findAll();

      if (users.length === 0) {
        return res.status(404).json({ message: "Users not found" });
      }

      return res.json(users);
    } catch (error) {
      console.error(error);
    }
  },

  show: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (user === null) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(user);
    } catch (error) {
      console.error(error);
    }
  },

  save: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const emailExists = await User.findOne({ where: { email } });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (!validatePassword(password)) {
      const messageError = validatePassword(password);

      return res.status(400).json({ message: messageError });
    }

    try {
      const user = await User.create({ name, email, password });

      return res.json(user);
    } catch (error) {
      console.error(error);
    }
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
      const user = await User.findByPk(id);

      if (user === null) {
        return res.status(404).json({ message: "User not found" });
      }

      user.name = name;
      user.email = email;
      user.password = password;

      await user.save();

      return res.json(user);
    } catch (error) {
      console.error(error);
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (user === null) {
        return res.status(404).json({ message: "User not found" });
      }

      await user.destroy();
      return res.status(202).json({ message: "User deleted" });
    } catch (error) {
      console.error(error);
    }
  },
};

export { usersController };
