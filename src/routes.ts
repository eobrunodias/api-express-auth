import { Router } from "express";
import { userController } from "./controllers/users/user-controller";
import { AuthUserController } from "./auth/auth-user-controller";
import { authMiddleware } from "./middlewares/auth";
import { taskController } from "./controllers/tasks/task-controller";

const router = Router();

// Home
router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

// Users
router.get("/users", authMiddleware, userController.index);
router.get("/users/:id", authMiddleware, userController.show);

router.post("/users/register", userController.store);
router.put("/users/:id", authMiddleware, userController.update);
router.patch("/users/:id", authMiddleware, userController.patch);
router.delete("/users/:id", authMiddleware, userController.delete);

router.post("/auth/login", AuthUserController.authenticate);
router.post("/auth/register", AuthUserController.authenticate);

// Tasks
router.get("/tasks", authMiddleware, taskController.index);
router.get("/tasks/:id", authMiddleware, taskController.show);
router.post("/tasks", authMiddleware, taskController.store);
router.put("/tasks/:id", authMiddleware, taskController.update);
router.patch("/tasks/:id", authMiddleware, taskController.patch);
router.delete("/tasks/:id", authMiddleware, taskController.delete);

// ...

export { router };
