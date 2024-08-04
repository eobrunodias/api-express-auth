import { Router } from "express";
import { userController } from "./controllers/users/user-controller";
import { taskController } from "./controllers/tasks/task-controller";
import { AuthUserController } from "./controllers/users/auth/auth-user-controller";
import { me } from "./middlewares/me";
import { auth } from "./middlewares/auth";

const router = Router();

// Home
router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

// Users
router.get("/users", auth, me, userController.index);
router.get("/users/:id", auth, me, userController.show);
router.post("/users/register", auth, me, userController.store);
router.patch("/users/:id", auth, me, userController.patch);
router.delete("/users/:id", auth, me, userController.delete);
router.put("/users/:id", auth, me, userController.update);

// Auth
router.post("/auth/login", AuthUserController.login);
router.post("/auth/register", AuthUserController.register);
router.post("/auth/me", AuthUserController.me);

// Tasks
router.get("/tasks", me, taskController.index);
router.get("/tasks/:id", me, taskController.show);
router.post("/tasks", me, taskController.store);
router.put("/tasks/:id", me, taskController.update);
router.patch("/tasks/:id", me, taskController.patch);
router.delete("/tasks/:id", me, taskController.delete);

// ...

export { router };
