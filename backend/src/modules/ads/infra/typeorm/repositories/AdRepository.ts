import { getRepository, Repository } from "typeorm";

import ICreateAdDTO from "@modules/ads/dtos/ICreateAdDTO";
import { IAdRepository } from "@modules/ads/repositories/IAdRepository";

import { Ad } from "../entities/Ad";

class AdRepository implements IAdRepository {
    private repository: Repository<Ad>;

    constructor() {
        this.repository = getRepository(Ad);
    }

    public async create({
        adName,
        client,
        endDate,
        investmentDay,
        totalInvestment,
        startDate,
        maxViews,
        maxClickers,
        maxShares,
    }: ICreateAdDTO): Promise<Ad> {
        const ad = this.repository.create({
            adName,
            client,
            endDate,
            investmentDay,
            totalInvestment,
            startDate,
            maxViews,
            maxClickers,
            maxShares,
        });

        await this.repository.save(ad);

        return ad;
    }

    public async findAll(): Promise<Ad[]> {
        const ads = this.repository.find();
        return ads;
    }
}

export { AdRepository };
