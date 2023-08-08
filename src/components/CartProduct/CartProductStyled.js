import styled from 'styled-components'
import { device } from '../../styles/Breakpoints'

export const CartProductStyled = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    padding: 1rem 3rem;
    gap: 4rem;
    box-shadow: var(--card-shadow);
    border-radius: 0.3rem;
    background-color: var(--bg-container);

    img{
        border-radius: 0.3rem;
        height: 5rem;
    }

    .action-section {
        display: flex;
        flex-direction: row;
        gap: 1rem;

    }

    .title{
        display: flex;
        width: 8rem;
        flex-wrap: wrap;
        font-weight: bold;
    }

    .price-container{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .price {
        font-weight: bold;
        font-size: 1.3rem;
    }

    .quantity-section{
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-radius: 0.3rem;
        background-color: var(--bg);
        gap: 0.8rem;
    }

    .quantity{
        font-size: 1.2rem;
    }

    @media screen and (${device.mobile}){
        padding: 0.5rem 0.5rem;
        gap: 0.5rem;
        justify-content: center;
        width: 22rem;

        img {
            height: 3rem;
        }

        .title {
            font-size: 0.8rem;
            width: 15rem;
        }

        .action-section {
            gap: 0.5rem;
        }

        .price-container{
            gap: 0.25;
   
        }

        .price {
            font-weight: bold;
            font-size: 0.8rem;
        }

        .quantity-section{
            padding: 0.3rem;
            gap: 0.3rem;
        }

        .quantity{
            font-size: 0.8rem;
        }

        button {
            padding: 0.1rem;
        }
    }

`