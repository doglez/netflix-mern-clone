import express from "express";
import { destroy, index, show, update } from "../controllers/userController.js";
import advancedResults from "../middleware/advancedResults.js";
import User from "../models/User.js";

const userRouter = express.Router();

userRouter.route("/").get(advancedResults(User), index);

userRouter.route("/:id").get(show).put(update).delete(destroy);

export default userRouter;
