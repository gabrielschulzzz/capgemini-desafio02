import styled from 'styled-components';

export const Container = styled.nav`
    font-family: 'Montserrat', sans-serif;
    background: var(--yellow);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 3rem;

    div {
        display: flex;

        svg {
            font-size: 1.5rem;
        }

        h1 {
            margin-left: .5rem;
        }

    }

    @media (max-width: 600px) {
        flex-direction: column;

        div {
            margin-bottom: 1rem;
        }

    } 

    @media (max-width: 720px) {
        padding: 2rem .5rem;
    } 

    
`