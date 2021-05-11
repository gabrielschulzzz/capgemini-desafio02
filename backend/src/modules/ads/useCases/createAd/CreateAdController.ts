import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAdUseCase } from "./CreateAdUseCase";

class CreateAdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            adName,
            client,
            endDate,
            investmentDay,
            startDate,
        } = request.body;

        const createAdUseCase = container.resolve(CreateAdUseCase);

        const ad = await createAdUseCase.execute({
            adName,
            client,
            endDate,
            investmentDay,
            startDate,
        });

        return response.status(201).json(ad);
    }
}

export { CreateAdController };
