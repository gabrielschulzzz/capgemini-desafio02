import { Container } from "./styles";
import { HiOutlineNewspaper } from 'react-icons/hi'
import { Button } from "../Button";

interface NavbarProps {
    onModalOpen: () => void;
}

export function Navbar({ onModalOpen }: NavbarProps) {
    return (
        <Container>
            <div>
                <HiOutlineNewspaper />
                <h1>Divulga Tudo</h1>
            </div>
            <Button handleModalOpen={onModalOpen} />
        </Container>
    )
}