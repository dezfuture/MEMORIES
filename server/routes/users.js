import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/signIn", signin);
router.post("/signUp", signup);

export default router;
