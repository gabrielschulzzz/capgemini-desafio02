import ICreateAdDTO from "@modules/ads/dtos/ICreateAdDTO";

import { Ad } from "../../infra/typeorm/entities/Ad";
import { IAdRepository } from "../IAdRepository";

class AdRepositoryInMemory implements IAdRepository {
    ads: Ad[] = [];

    async create({
        adName,
        client,
        endDate,
        investmentDay,
        maxClickers,
        maxShares,
        maxViews,
        startDate,
        totalInvestment,
    }: ICreateAdDTO): Promise<Ad> {
        const ad = new Ad();
        Object.assign(ad, {
            adName,
            client,
            endDate,
            investmentDay,
            maxClickers,
            maxShares,
            maxViews,
            startDate,
            totalInvestment,
        });

        this.ads.push(ad);
        return ad;
    }
    async findAll(): Promise<Ad[]> {
        return this.ads;
    }
}

export { AdRepositoryInMemory };
