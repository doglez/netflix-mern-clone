import expres from "express";
import { SignIn, SignUp } from "../controllers/AuthController";

const AuthRoutes = expres.Router();

AuthRoutes.post("/signup", SignUp);
AuthRoutes.post("/signin", SignIn);

export default AuthRoutes;
