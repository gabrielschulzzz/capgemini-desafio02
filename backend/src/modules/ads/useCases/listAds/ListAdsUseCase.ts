/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Ad } from "@modules/ads/infra/typeorm/entities/Ad";
import { IAdRepository } from "@modules/ads/repositories/IAdRepository";

@injectable()
class ListAdsUseCase {
    constructor(
        @inject("AdRepository")
        private adRepository: IAdRepository
    ) { }

    async execute(): Promise<Ad[]> {
        const ads = this.adRepository.findAll()

        return ads;
    }
}

export { ListAdsUseCase };
