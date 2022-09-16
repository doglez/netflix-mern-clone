import express from "express";
import AuthRoutes from "./AuthRoutes";

const Routes = express();

Routes.use("/auth", AuthRoutes);

export default Routes;
