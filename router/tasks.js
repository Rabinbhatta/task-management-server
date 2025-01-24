import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controller/tasks.js";

const router = express.Router();

router.get("/get", getTasks);
router.post("/create", createTask);
router.patch("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
