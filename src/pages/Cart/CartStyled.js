import styled from 'styled-components'
import { device } from '../../styles/Breakpoints'

export const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 3rem;


    .go-back-link{
        color: var(--accept);

        :hover{
            color: var(--accept-hover);
        }
    }

    .total-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        font-size: 1.5rem;
        font-weight: bold;

        hr{
            border: 1px solid var(--accept);
        }
    }

    .total-section-items{
        display: flex;
        justify-content: space-between;
        gap: 5rem;
    }

    .total-subtotal {
        display: flex;
        align-items: center;
        gap: 0.5rem;

    }

    @media screen and (${device.mobile}){

        .total-section{
            gap: 1.5rem;
            font-size: 1.3rem;
        }

        h2{
            font-size: 1.2rem;
        }
    }

`