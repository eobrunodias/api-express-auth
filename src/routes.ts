import { Router } from "express";
import { User } from "./models/user-model";

const router = Router();

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

router.get("/users", async (request, response) => {
  try {
    const users = await User.findAll();
    console.log(users);

    if (users.length === 0) {
      return response.status(404).json({ message: "Users not found" });
    }

    return response.json(users);
  } catch (error) {
    console.error(error);
  }
});

router.get("/users/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findByPk(id);

    if (user === null) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.json(user);
  } catch (error) {
    console.error(error);
  }
});

router.post("/users", async (request, response) => {
  const { name, email, password } = request.body;

  try {
    const user = await User.create({ name, email, password });

    return response.json(user);
  } catch (error) {
    console.error(error);
  }
});

export { router };
