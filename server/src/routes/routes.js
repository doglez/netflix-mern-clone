import express from "express";
import userRouter from "./userRouter.js";

const routes = express();

routes.use("/users", userRouter);

export default routes;
