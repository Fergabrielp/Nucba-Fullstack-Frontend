import styled from 'styled-components'
import { device } from '../../../styles/Breakpoints'


export const ProductListContainerStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ProductListStyled = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 100vw;
    margin: 4rem 0;

    @media screen and (${device.mobile}){
        margin: 2rem 0;
    }
`

export const BtnMoreStyled = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
`