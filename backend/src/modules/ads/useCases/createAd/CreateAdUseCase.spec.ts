import { AdRepositoryInMemory } from "@modules/ads/repositories/in-memory/AdRepositoryInMemory";

import { CreateAdUseCase } from "./CreateAdUseCase";

let createAdUseCase: CreateAdUseCase;
let adsRepositoryInMemory: AdRepositoryInMemory;

describe("Create Ad", () => {
    beforeEach(() => {
        adsRepositoryInMemory = new AdRepositoryInMemory();
        createAdUseCase = new CreateAdUseCase(adsRepositoryInMemory);
    });

    it("should be able to create a new ad", async () => {
        const ad = await createAdUseCase.execute({
            adName: "Propaganda Capgemini",
            client: "Capgemini",
            startDate: new Date("2021-05-12"),
            endDate: new Date("2021-05-15"),
            investmentDay: 100,
        });

        expect(ad).toHaveProperty("client");
    });
});
