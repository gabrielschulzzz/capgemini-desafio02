import { FormEvent, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Container } from './styles'

interface AdModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function AdModal({ isOpen, onRequestClose }: AdModalProps) {
    const [erro, setErro] = useState('')
    const [anuncio, setAnuncio] = useState('')
    const [cliente, setCliente] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [investimento, setInvestimento] = useState('')

    const onAdSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!anuncio || !cliente || !startDate || !endDate || !investimento) {
            console.log('erro')
            setErro('Preencha todos os campos!')

            setTimeout(() => { setErro('') }, 2000);
        } else {
            console.log(startDate, endDate)
            axios.post('http://localhost:3333/ads', {
                adName: anuncio,
                client: cliente,
                startDate,
                endDate,
                investmentDay: investimento
            }).then((response) => {
                setAnuncio('')
                setCliente('')
                setStartDate('')
                setEndDate('')
                setInvestimento('')
                onRequestClose()
            }, (error) => {
                console.log(error);
            });
        }

    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <Container onSubmit={onAdSubmit}>
                <h2>Cadastrar novo anuncio</h2>

                <input
                    type="text"
                    placeholder="Nome do anuncio"
                    value={anuncio}
                    onChange={(e) => setAnuncio(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Cliente"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />

                <input
                    type="date"
                    placeholder="Dia do inicio"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />

                <input
                    type="date"
                    placeholder="Dia do termino"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Investimento diario"
                    value={investimento}
                    onChange={(e) => setInvestimento(e.target.value)}
                />

                {erro && <h3>{erro}</h3>}

                <button type="submit">Cadastrar</button>
            </Container>



        </Modal>
    )
}