export default interface ICreateAdDTO {
    adName: string;
    client: string;
    startDate: Date;
    endDate: Date;
    investmentDay: number;
    totalInvestment: number;
    maxViews: number;
    maxClickers: number;
    maxShares: number;
}
