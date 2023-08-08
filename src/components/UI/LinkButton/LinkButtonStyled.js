import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const LinkButtonStyled = styled(Link)`

    color: ${props => props.col};
    background-color: ${props => props.bg};
    height: ${props => props.h};
    width: ${props => props.w};
    padding: 0.5rem 1.3rem;
    border-radius: 0.3rem;
    border: none;
    box-shadow: 5px 7px 8px -5px rgba(0,0,0,0.60);
    text-align: center;

    :hover { 
        cursor: pointer;
        background-color: ${props => props.bgh};
    }   
`