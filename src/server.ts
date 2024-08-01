import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

try {
  app.listen(port | 3000, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} catch (error) {
  console.error(error);
}
