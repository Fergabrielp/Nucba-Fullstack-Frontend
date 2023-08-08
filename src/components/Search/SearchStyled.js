import styled from 'styled-components'
import { device } from '../../styles/Breakpoints'

export const SearchStyled = styled.form`
    display: flex;

    input{
        background-color: var(--bg);
        height: 2rem;
        border-radius: 0.3rem;
        border-top-right-radius: 0;
        width: 50rem;
        border-bottom-right-radius: 0;
        border: none;
        padding: 0.8rem;
        outline: none;
        color: var(--text-white);
        
    }

    button {
        border-style: none;
        background-color: var(--bg);
        border-radius: 0.3rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0.3rem;
    }

    @media screen and (${device.mobile}){
        input {
            width: 100%;
        }
    }

    @media screen and (${device.desktop}){
        input {
            width: 12rem;
        }
    }
`