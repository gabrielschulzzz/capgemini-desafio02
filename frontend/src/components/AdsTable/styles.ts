import styled from 'styled-components';
import { lighten } from 'polished'

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0;

        th {
            color: var(--orange);
            font-weight: 400;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            text-align: center;
            line-height: 1.5rem;
        }

        tr {
            text-align: center;
        }

        td {
            padding: 1rem 1rem;
            border: 0;
            color: var(--black);
        }

        tbody {
            tr:nth-of-type(odd) {
                background-color: var(--grey);
            }

            tr:nth-of-type(even) {
                background-color: ${lighten(0.1, "#ccc")}
            }
        }


    }

    @media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {
	table, thead, tbody, th, td, tr { 
		display: block; 
	}

	
	thead tr { 
        font-weight: bold;
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
    
	
	tr { 
        border: 1px solid #ccc; 
        margin: 15px 0;
    }
	
	td { 
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
	}
	
	td:before { 
		position: absolute;
		top: 18px;
		left: 8px;
	}

    td:nth-of-type(1):before { content: "Nome"; }
	td:nth-of-type(2):before { content: "Cliente"; }
	td:nth-of-type(3):before { content: "Início"; }
	td:nth-of-type(4):before { content: "Término"; }
	td:nth-of-type(5):before { content: "Investimento/dia"; }
	td:nth-of-type(6):before { content: "Total Investido"; }
	td:nth-of-type(7):before { content: "Visualizações"; }
	td:nth-of-type(8):before { content: "Cliques"; }
	td:nth-of-type(9):before { content: "Compartilhamentos"; }
}
`