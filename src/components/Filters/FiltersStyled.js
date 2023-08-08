import styled from 'styled-components'
import { device } from '../../styles/Breakpoints'

export const FiltersStyled = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    gap: 3rem;
    border-radius: 0.3rem;
    background-color: var(--bg-container);
    
    label{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: bold;
    }

    select{
        padding: 0.2rem;
        border-radius: 0.3rem;
        color: var(--text-white);
        background-color: var(--bg);
    }

    @media screen and (${device.mobile}){

        flex-direction: column;
        align-items: center;
        background-color: transparent;
        padding-top: 0.5rem;
        height: 100%;
        gap: 1.5rem;
    }
`