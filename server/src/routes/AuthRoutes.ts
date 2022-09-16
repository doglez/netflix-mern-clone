import expres from "express";
import { GetMe, SignIn, SignOut, SignUp } from "../controllers/AuthController";
import { Protect } from "../middleware/AuthMideleware";

const AuthRoutes = expres.Router();

AuthRoutes.post("/signup", SignUp);
AuthRoutes.post("/signin", SignIn);
AuthRoutes.get("/signout", Protect, SignOut);
AuthRoutes.get("/me", Protect, GetMe);

export default AuthRoutes;
