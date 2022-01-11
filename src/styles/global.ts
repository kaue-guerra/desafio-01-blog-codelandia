import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --white:#fff;
    --white-200: #f9f9f9;
    --gray: #717171;
    --gray-900: #1a202c;
    --purple: #574AE8;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend Deca',sans-serif;
    font-weight: 300;
}

body{
    background-color: #F3F5F7

}


`