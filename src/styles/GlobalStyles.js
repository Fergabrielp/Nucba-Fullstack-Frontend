import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --bg: #273142;
        --bg-container: #556270;
        --text-white: rgb( 232, 234, 237 );
        --text-dark: #191B1F;
        --text-grey: rgb( 95, 99, 104 );
        --accept: #00755c;
        --accept-hover: #015845;
        --cancel: #dd423e;
        --cancel-hover: #962e2b;
        --card-shadow: 3px 7px 19px -4px rgba(0,0,0,0.59);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
        min-height: 100%;
        position: relative;
    }

    body{
        background-color: var(--bg);
        color: var(--text-white);
        font-family: 'Ubuntu', sans-serif;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`

export default GlobalStyle;