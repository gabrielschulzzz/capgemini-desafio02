import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #393e46;
        --strong-grey: #687980;
        --white: #f8f5f1;
        --orange: #e1701a;
        --yellow: #f7a440;
        --light: #f6dcbf;
        --grey: #eee;
        --red: #cf0000;
    }
    
    html {
        max-width: 100vw;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button {
        background: var(--white);
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 720px;
        background: var(--white);
        padding: 3rem;
        border-radius: 0.25rem;
        outline: none;
    }

    @media (max-width: 720px) {
        .react-modal-content {
            width: 85%;
            height: 65%;
            overflow: scroll;
            padding: 2rem;
        }
    } 
`