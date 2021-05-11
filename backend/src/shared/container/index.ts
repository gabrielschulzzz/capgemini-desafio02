import { container } from "tsyringe";

import { AdRepository } from "@modules/ads/infra/typeorm/repositories/AdRepository";
import { IAdRepository } from "@modules/ads/repositories/IAdRepository";

container.registerSingleton<IAdRepository>("AdRepository", AdRepository);
