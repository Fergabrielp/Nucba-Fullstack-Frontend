import styled from 'styled-components'
import { device } from '../../styles/Breakpoints'

export const HeroStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
    box-shadow: var(--card-shadow);

    img {
        height: 100%;
        width: 100%;
    }
    
    .logo-img{
        height: 7rem;
        width: 40rem;
    }

    @media screen and (${device.mobile}){
        flex-direction: column;
        margin-bottom: 2rem;

        .sale-left , .sale-right {
            display: none;
        }

        .logo-img{
        height: 6rem;
        width: 18rem;
        }
    }

    @media screen and (${device.desktop}){


        .sale-left , .sale-right {
            display: none;
        }

        .logo-img{
            height: 100%;
            width: 18rem;
        }

    }
`
