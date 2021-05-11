import { Router } from "express";

import { CreateAdController } from "@modules/ads/useCases/createAd/CreateAdController";
import { ListAdsController } from "@modules/ads/useCases/listAds/ListAdsController";

const createAdController = new CreateAdController();
const listAdsController = new ListAdsController();
const adRoutes = Router();

adRoutes.post("/", createAdController.handle);
adRoutes.get("/", listAdsController.handle);

export { adRoutes };
