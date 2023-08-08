import styled from 'styled-components'


export const RegisterContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        align-items: center;
        gap: 1rem;
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
        justify-content: center;
        align-items: center;
        gap: 1rem;

        input{
            background-color: var(--bg);
            height: 1.6rem;
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

`