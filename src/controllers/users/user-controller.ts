import { User } from "../../models/user-model";
import { Request, Response } from "express";
import { validatePassword } from "../../helpers/validate-password";
import { validateEmail } from "../../helpers/validate-email";
import bcrypt from "bcrypt";

const saltRounds = 10;

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

  store: async (req: Request, res: Response) => {
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

    if (validatePassword(password)) {
      const messageError = validatePassword(password);

      return res.status(400).json({ message: messageError });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({ name, email, password: hashedPassword });

      return res.json(user);
    } catch (error) {
      console.error(error);
    }
  },

  patch: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
      const user = await User.findByPk(id);

      if (user === null) {
        return res.status(404).json({ message: "User not found" });
      }

      if (email) {
        if (!validateEmail(email)) {
          return res.status(400).json({ message: "Invalid email" });
        }

        const emailExists = await User.findOne({ where: { email } });
        if (emailExists && emailExists.id !== user.id) {
          return res.status(400).json({ message: "Email already exists" });
        }

        user.email = email;
      }

      if (password) {
        if (!validatePassword(password)) {
          const messageError = validatePassword(password);
          return res.status(400).json({ message: messageError });
        }

        user.password = password;
      }

      if (name) {
        user.name = name;
      }

      await user.save();

      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
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

      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      }

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({ message: "Invalid email" });
      }

      const emailExists = await User.findOne({ where: { email } });
      if (emailExists && emailExists.id !== user.id) {
        return res.status(400).json({ message: "Email already exists" });
      }

      if (!validatePassword(password)) {
        const messageError = validatePassword(password);

        return res.status(400).json({ message: messageError });
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
