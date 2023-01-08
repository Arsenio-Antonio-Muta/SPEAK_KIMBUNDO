import { Router } from "express";
import { authenticateRouter } from "./authenticate.routes";
import { userRoute } from "./user.routes";
import { vocabulariesRoutes } from "./vocabulary.routes";

const router = Router();

router.use("/vocabularies", vocabulariesRoutes);
router.use("/users", userRoute);
router.use(authenticateRouter);

export { router } 