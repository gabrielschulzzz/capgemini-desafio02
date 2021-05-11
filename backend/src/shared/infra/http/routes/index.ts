import { Router } from "express";

import { adRoutes } from "./ads.routes";

const router = Router();

router.use("/ads", adRoutes);

export { router };
