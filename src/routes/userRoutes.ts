import express from "express";

import { loginUser, register } from "../controllers/authController";
const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser)

export default router;