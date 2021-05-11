import ICreateAdDTO from "../dtos/ICreateAdDTO";
import { Ad } from "../infra/typeorm/entities/Ad";

interface IAdRepository {
    create(data: ICreateAdDTO): Promise<Ad>;
    findAll(): Promise<Ad[]>;
}

export { IAdRepository };
