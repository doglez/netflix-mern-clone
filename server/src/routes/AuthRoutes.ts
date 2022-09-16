import expres from "express";
import { SignUp } from "../controllers/AuthController";

const AuthRoutes = expres.Router();

AuthRoutes.post("/signup", SignUp);

export default AuthRoutes;
