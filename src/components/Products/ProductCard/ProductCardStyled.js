import styled from 'styled-components'


export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20rem;
    gap: 2rem;
    padding: 2rem;
    background-color: var(--bg-container);
    border-radius: 0.5rem;
    box-shadow: var(--card-shadow);

    h3{
        text-transform: capitalize;

    }
    .platform-genre-container{
        display: flex;
        justify-content: space-between;
        color: var(--bg);
        width: 100%;
    }

    .price-cart-container{
        display: flex;
        align-items: center;
        margin-top: 1rem;
        gap: 4rem;

        .price{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-weight: bold;
            font-size: 1.4rem;
        }
    }

    img {
        max-height: 10rem;
        border-radius: 0.3rem;
    }
`