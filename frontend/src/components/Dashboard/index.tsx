import { AdsTable } from "../AdsTable";

import { Container } from './styles'

export function Dashboard() {
    return (
        <Container>
            <h1>Anúncios Cadastrados</h1>
            <AdsTable />
        </Container>
    )
}