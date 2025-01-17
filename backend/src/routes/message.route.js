import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getUserForSidebar, getMessage, sendMessage } from "../controllers/message.contoller.js";

const router = express.Router();

router.get("/user", protectRoute, getUserForSidebar);
router.get("/:id", protectRoute, getMessage)
router.post("/send/:id", protectRoute, sendMessage);

export default router;