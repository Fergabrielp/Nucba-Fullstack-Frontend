import styled from 'styled-components'
import { device } from '../../styles/Breakpoints'

export const HeroStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
    gap: 2rem;
    padding: 1rem;
    width: 40rem;
    box-shadow: var(--card-shadow);

    h1{
        font-size: 2rem;
    }

    img {
        height: 100%;

    }
    
    .logo-img{
        height: 2rem;
    }

    @media screen and (${device.mobile}){
        flex-direction: column;
        margin-bottom: 2rem;

        .logo-img{
        height: 2rem;
        }
    }

    @media screen and (${device.desktop}){

        .logo-img{
            height: 2rem;
        }

    }
`
