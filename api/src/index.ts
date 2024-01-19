import "dotenv/config";
import { router } from "./app/routes";

import express from "express";
import mongoose from "mongoose";
import process from "process";

const app = express();

app.use(express.json());
app.use(router);

mongoose
  .connect(process.env.DATABASE_URL ?? "")
  .then(() => {
    app.listen(3333, () => {
      console.log("Server is running in http://localhost:3333");
    });
  })
  .catch(() => console.log("Erro in DATABASE connection"));
