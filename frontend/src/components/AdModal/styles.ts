import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.form`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 1rem;
        color: var(--black);
    }

    h3 {
        padding: 1rem;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2rem;
        text-align: center;
        color: var(--red);
        font-weight: 400;
    }

    input {
        border: 0;
        border: 1px solid var(--strong-grey);
        padding: 1rem;
        border-radius: 0.25rem;

        :focus {
            outline:none;
            background: var(--light);
            border:1px solid var(--orange);
        }

    }

    > input {
        margin: .5rem 0;
    }

    button {
        margin-top: .8rem;
        font-size: 1.2rem;
        font-family: 'Montserrat', sans-serif;
        padding: 0.8rem 1.2rem;
        border: none;
        cursor: pointer;
        background: var(--orange);
        color: var(--white);
        border-radius: 0.25rem;
        transition: background 0.2s;

        :hover {
            background: ${lighten(0.1, "#e1701a")}
        }
    }

    @media (max-width: 720px) {
        h2 {
            font-size: 1.2rem;
        }

        button {
            font-size: .8rem;
        }
    } 

`