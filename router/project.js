import express from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controller/project.js";

const router = express.Router();

router.get("/get", getProjects);
router.post("/create", createProject);
router.patch("/update/:id", updateProject);
router.delete("/delete/:id", deleteProject);

export default router;
