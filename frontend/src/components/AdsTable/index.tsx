import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from "./styles";
import { format } from 'date-fns';

interface data {
    id: string;
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

export function AdsTable() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3333/ads',
            );

            setData(result.data);
        };

        fetchData();
    }, [data]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cliente</th>
                        <th>Início</th>
                        <th>Término</th>
                        <th>Investimento/dia</th>
                        <th>Total Investido</th>
                        <th>Visualizações</th>
                        <th>Cliques</th>
                        <th>Compartilhamentos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(({ id, adName, client, startDate, endDate, investmentDay, totalInvestment, maxViews, maxClickers, maxShares }: data) => (
                            <tr key={id}>
                                <td>{adName}</td>
                                <td>{client}</td>
                                <td>{format(new Date(startDate), 'dd/MM/yyyy')}</td>
                                <td>{format(new Date(endDate), 'dd/MM/yyyy')}</td>
                                <td>                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(investmentDay)}</td>
                                <td>                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(totalInvestment)}</td>
                                <td>{maxViews}</td>
                                <td>{maxClickers}</td>
                                <td>{maxShares}</td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </Container>
    )
}