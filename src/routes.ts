import { Router } from "express";
import { usersController } from "./controllers/users/user-controller";
import { AuthUserController } from "./controllers/users/auth/auth-user-controller";
import { AuthMiddlewares } from "./middlewares/auth";

const router = Router();

// Home
router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

// Users
router.get("/users", AuthMiddlewares, usersController.index);
router.get("/users/:id", usersController.show);
router.post("/users/register", usersController.store);
router.put("/users/:id", usersController.update);
router.patch("/users/:id", usersController.patch);
router.delete("/users/:id", usersController.delete);

router.post("/auth", AuthUserController.authenticate);

// ...

export { router };
