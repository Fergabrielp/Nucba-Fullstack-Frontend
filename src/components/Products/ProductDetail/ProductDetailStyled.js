import styled from 'styled-components'
import { device } from '../../../styles/Breakpoints'


export const ProductDetailStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 98vw;
    gap: 2rem;
    padding: 2rem;
    background-color: var(--bg);

    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        width: 100%;
        border-radius: 0.3rem;
        background-color: var(--bg-container);
        
            .title-btn{
                display: flex;
                gap: 1rem;
            }
    }

    .img-description-container{
        display: flex;
        gap: 1rem;

        p{
            padding: 1rem;
            border-radius: 0.3rem;
            background-color: var(--bg-container);
        }
    }

    .foot-data{
        display: flex;
        justify-content: space-around;
        min-width: 100%;
        background-color: var(--bg-container);
        border-radius: 0.3rem;
        padding: 1rem;

        div{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        span {
            font-weight: bold;
        }
    }
    
    .img-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;

        img{
            border-radius: 0.3rem;
        }
    }

    .requirements-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        gap: 1rem;
        width: 100%;
        margin-bottom: 2rem;
        border-radius: 0.3rem;
        background-color: var(--bg-container);

        div{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        span{
            font-weight: bold;
        }
    }

    @media screen and (${device.mobile}){

        padding: 0 2rem;
        margin: 0;

        .title {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background-color: transparent;
            font-size: 1.5rem;
            padding: 0;
        }

        .img-description-container {
            display: flex;
            flex-direction: column;
            img {
                height: 12rem;
            }
        }

        .foot-data {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 21rem;
            padding: 1.5rem;
            gap: 1rem;
            border-radius: 0.3rem;
        }


        .img-container img{
            height: 12rem;
        }

        .requirements-container{
            width: 21rem;
            padding: 1.5rem;
        }
    }
`