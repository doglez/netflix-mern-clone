import expres from "express";
import { SignIn, SignOut, SignUp } from "../controllers/AuthController";
import { Protect } from "../middleware/AuthMideleware";

const AuthRoutes = expres.Router();

AuthRoutes.post("/signup", SignUp);
AuthRoutes.post("/signin", SignIn);
AuthRoutes.get("/signout", Protect, SignOut);

export default AuthRoutes;
