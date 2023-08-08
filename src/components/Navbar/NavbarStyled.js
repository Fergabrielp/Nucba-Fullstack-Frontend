import styled from 'styled-components'
import { device } from '../../styles/Breakpoints'

export const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    width: 100vw;
    padding: 2rem 3rem;
    background-color: var(--bg-container);
    box-shadow: var(--card-shadow);
    position: fixed;
    z-index: 9999;

    .burger-menu {

        display: none;
    }

    @media screen and (${device.mobile}){

        padding: 1.8rem 1rem;

        .burger-menu {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 0vh;
            opacity: 0;
            width: 100vw;
            position: absolute;
            top: 3.5rem;
            left: 0;
            background-color: var(--bg-container);
            box-shadow: var(--card-shadow);
            transition: all .5s ease;
            gap: 2rem;

        }

        .open-menu{
            height: 50vh;
            opacity: 1;
        }

        .icon-p-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            font-size: 1.1rem;
            font-weight: bold;
        }
    }
`
export const LogoStyled = styled.img`
    cursor: pointer;
    @media screen and (${device.mobile}){

        height: 1.5rem;

    }
`
export const LinkStyled = styled.ul`

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    gap: 2rem;

    .burger-icon {
        display: none;
    }
    
    a{
        text-decoration: none;
        color: var(--text-white);
        font-weight: 600;

    }
    a.active{
        color: var(--bg);
        font-weight: bold;
    }


    h3{
        color: var(--text-white);
        text-transform: capitalize;
    }
    

    @media screen and (${device.mobile}){

        gap: 1rem;

        .burger-icon {
            display: flex;
        }
        .home-icon{
            display: none;
        }
        .cart-icon {
            display: none;
        }
        button{
            display: none;
        }
        h3{
            display: none;
        }
    }
`

export const BubbleCart = styled.div`

    background-color: var(--cancel);
    color: var(--text-white);
    border-radius: 100%;
    text-align: center;
    position: absolute;
    padding: 1px 4px;
    top: -10%;
    right: 42%;
    font-size: 0.7rem;
`
