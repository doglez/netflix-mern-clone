import express from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";

const routes = express();

routes.use("/users", userRouter);
routes.use(authRouter);

export default routes;
