import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ads")
class Ad {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    adName: string;

    @Column()
    client: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    investmentDay: number;

    @Column()
    totalInvestment: number;

    @Column()
    maxViews: number;

    @Column()
    maxClickers: number;

    @Column()
    maxShares: number;
}

export { Ad };
