import { Router } from "express";
import { usersController } from "./controllers/user-controller";

const router = Router();

// Home
router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

// Users
router.get("/users", usersController.index);
router.get("/users/:id", usersController.show);
router.post("/users", usersController.save);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.delete);

// ...

export { router };
