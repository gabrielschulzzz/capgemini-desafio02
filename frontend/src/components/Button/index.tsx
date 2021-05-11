import { Container } from './styles'
import { AiOutlinePlus } from 'react-icons/ai'

interface ButtonProps {
    handleModalOpen: () => void;
}

export function Button({ handleModalOpen }: ButtonProps) {
    return (
        <Container>
            <p onClick={handleModalOpen}>
                <AiOutlinePlus />Adicionar novo anuncio
            </p>
        </Container>

    )
}