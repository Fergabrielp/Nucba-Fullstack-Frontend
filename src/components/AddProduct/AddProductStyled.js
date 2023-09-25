import styled from 'styled-components'
import { device } from '../../styles/Breakpoints'

export const AddProductStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35rem;
    margin-top: 4rem;
    padding: 3rem;
    border-radius: 0.3rem;
    gap: 2rem;
    box-shadow: var(--card-shadow);
    background-color: var(--bg-container);

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    label {
        font-weight: bold;
    }

    textarea {
        resize: none;
        width: 18rem;
        height: 6rem;
        background-color: var(--bg);
        border-radius: 0.3rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: none;
        padding: 1rem;
        outline: none;
        color: var(--text-white);
    }

    textarea::-webkit-scrollbar {
        background-color: var(--bg);
        width: 5px;
    }

    textarea::-webkit-scrollbar-thumb {
        background-color: var(--text-white);
    }

    .input-error-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    .input-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 2rem;

        input{
            text-align: center;
            background-color: var(--bg);
            height: 1.6rem;
            width: 18rem;
            border-radius: 0.3rem;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border: none;
            padding: 1rem;
            outline: none;
            color: var(--text-white);
        }

        input.input-error {
            border: 1px solid var(--cancel);

        }
    }

    .error-msg {
        display: flex;
        color: var(--cancel);
        max-width: 13rem;
    }


    @media screen and (${device.desktop}){

        width: 100%;
        padding: 1.5rem 0;
        gap: 0.5rem;

        form{
            margin-top: 1rem;
            width: 90%;
            gap: 1rem;
        }

        .input-container{
            gap: 1rem;

            input{
            text-align: center;
            height: 1.6rem;
            width: 11.5rem;
            padding: 0.5rem;
        }
        }

        textarea {
            width: 11.5rem;
            height: 6rem;
        }
    }
`