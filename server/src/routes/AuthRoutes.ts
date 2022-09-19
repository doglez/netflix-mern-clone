import expres from "express";
import {
    ForgotPass,
    GetMe,
    ResetPass,
    SignIn,
    SignOut,
    SignUp,
    TokenValidationEnable,
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
AuthRoutes.post("/forgotpassword", ForgotPass);
AuthRoutes.put("/resetpassword/:resettoken", ResetPass);
AuthRoutes.get("/valtoken", Protect, TokenValidationEnable);

export default AuthRoutes;
