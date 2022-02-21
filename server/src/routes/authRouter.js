import express from "express";
import {
    forgotPass,
    login,
    logout,
    meInfo,
    register,
    resetPass,
    updateMe,
    updatePass,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", protect, logout);
authRouter.post("/forgotpassword", forgotPass);
authRouter.post("/resetpassword/:resettoken", resetPass);
authRouter.get("/me", protect, meInfo);
authRouter.put("/updateme", protect, updateMe);
authRouter.put("/updatepass", protect, updatePass);

export default authRouter;
