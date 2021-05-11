/* eslint-disable prettier/prettier */
import { differenceInDays } from 'date-fns'
import { inject, injectable } from "tsyringe";

import { Ad } from "@modules/ads/infra/typeorm/entities/Ad";
import { IAdRepository } from "@modules/ads/repositories/IAdRepository";

interface IRequest {
    adName: string,
    client: string,
    endDate: Date,
    investmentDay: number,
    startDate: Date,
}

interface IShareCycle {
    shareViews: number;
    clickers: number;
    shares: number;
}

interface IProjecao {
    totalViews: number;
    totalClickers: number;
    totalShares: number;
}

@injectable()
class CreateAdUseCase {
    constructor(
        @inject("AdRepository")
        private adRepository: IAdRepository
    ) { }

    async execute({
        adName,
        client,
        endDate,
        investmentDay,
        startDate,

    }: IRequest): Promise<Ad> {
        const difference = differenceInDays(new Date(endDate), new Date(startDate))
        const totalInvestment = difference * investmentDay;

        const { totalViews, totalClickers, totalShares } = this.projecao(totalInvestment)

        const maxViews = Math.round(totalViews);
        const maxClickers = Math.round(totalClickers);
        const maxShares = Math.round(totalShares);

        const ad = await this.adRepository.create({
            adName,
            client,
            endDate,
            investmentDay,
            totalInvestment,
            startDate,
            maxViews,
            maxClickers,
            maxShares
        })

        return ad
    }

    private projecao(valor: number): IProjecao {
        const initialViews = valor * 30;
        let totalViews = 0;
        let totalClickers = 0;
        let totalShares = 0;

        if (initialViews < 100) {
            totalViews = initialViews;
        }


        if (initialViews > 100) {
            const {
                shareViews,
                clickers,
                shares
            } = this.shareCycle(initialViews)

            const {
                shareViews: shareViews2,
                clickers: clickers2,
                shares: shares2
            } = this.shareCycle(shareViews)

            const {
                shareViews: shareViews3,
                clickers: clickers3,
                shares: shares3
            } = this.shareCycle(shareViews2)

            const {
                shareViews: shareViews4,
                clickers: clickers4,
                shares: shares4
            } = this.shareCycle(shareViews3)

            totalViews = initialViews + shareViews + shareViews2 + shareViews3 + shareViews4
            totalClickers = clickers + clickers2 + clickers3 + clickers4;
            totalShares = shares + shares2 + shares3 + shares4;

        }

        return { totalViews, totalClickers, totalShares };

    }

    private shareCycle(views: number): IShareCycle {
        const clickers = (views / 100) * 12;
        const shares = (clickers / 20) * 3;
        const shareViews = shares * 40;

        return { shareViews, clickers, shares };
    }
}

export { CreateAdUseCase };
