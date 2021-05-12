import { AdRepositoryInMemory } from "@modules/ads/repositories/in-memory/AdRepositoryInMemory";

import { CreateAdUseCase } from "../createAd/CreateAdUseCase";
import { ListAdsUseCase } from "./ListAdsUseCase";

let listAdsUseCase: ListAdsUseCase;
let createAdUseCase: CreateAdUseCase;
let adsRepositoryInMemory: AdRepositoryInMemory;

describe("List Ads", () => {
    beforeEach(() => {
        adsRepositoryInMemory = new AdRepositoryInMemory();
        createAdUseCase = new CreateAdUseCase(adsRepositoryInMemory);
        listAdsUseCase = new ListAdsUseCase(adsRepositoryInMemory);

        createAdUseCase.execute({
            adName: "Propaganda Capgemini",
            client: "Capgemini",
            startDate: new Date("2021-05-12"),
            endDate: new Date("2021-05-15"),
            investmentDay: 100,
        });
    });

    it("should be able to list ads", async () => {
        const ads = await listAdsUseCase.execute();

        expect(ads).toHaveLength(1);
    });
});
