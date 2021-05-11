import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdd1620068427240 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ads",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "adName",
                        type: "varchar",
                    },
                    {
                        name: "client",
                        type: "varchar",
                    },
                    {
                        name: "startDate",
                        type: "timestamp",
                    },
                    {
                        name: "endDate",
                        type: "timestamp",
                    },
                    {
                        name: "investmentDay",
                        type: "int",
                    },
                    {
                        name: "totalInvestment",
                        type: "int",
                    },
                    {
                        name: "maxViews",
                        type: "int",
                    },
                    {
                        name: "maxClickers",
                        type: "int",
                    },
                    {
                        name: "maxShares",
                        type: "int",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ads");
    }
}
