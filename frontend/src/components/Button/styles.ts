import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
    text-align: center;

    p {
        background-color: var(--orange);
        display: flex;
        align-items: center;
        width: fit-content;
        margin: 0 auto;
        padding: 0.8rem 1.4rem;
        border: none;
        cursor: pointer;
        border-radius: 0.125rem;
        color: #fff;
        font-family: Montserrat;
        transition: background 0.2s;

        svg {
            margin-right: .5rem;
        }


        :hover {
            background: ${lighten(0.1, "#e1701a")}
        }
    }   

    @media (max-width: 720px) {
        p {
            padding: .5rem;

            svg {
                display: none;
            }
        }
    } 
`