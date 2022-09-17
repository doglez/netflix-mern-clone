import expres from "express";
import {
    GetMe,
    SignIn,
    SignOut,
    SignUp,
    UpdateMe,
    UpdatePass,
} from "../controllers/AuthController";
import { Protect } from "../middleware/AuthMideleware";

const AuthRoutes = expres.Router();

AuthRoutes.post("/signup", SignUp);
AuthRoutes.post("/signin", SignIn);
AuthRoutes.get("/signout", Protect, SignOut);
AuthRoutes.get("/me", Protect, GetMe);
AuthRoutes.put("/updateme", Protect, UpdateMe);
AuthRoutes.put("/updatepass", Protect, UpdatePass);

export default AuthRoutes;
