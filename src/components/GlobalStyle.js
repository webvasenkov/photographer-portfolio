import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1c1c1c;
    font-family: "Inter", sans-serif;
}

button {
    font-family: "Inter", sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background-color: transparent;
    color: #fff;
    transition: all .3s ease-in-out;

    &:hover {
        color: white;
        background-color: #23d997;
    }
}

h2 {
    font-weight: 300;
    font-size: 4rem;
}

h3 {
    color: white;
}

h4 {
    font-weight: 700;
    font-size: 2rem;
}

span {
    font-weight: 700;
    color: #23d997;
}

a {
    font-size: 1.1rem;
}

p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
`;

export default GlobalStyle;
