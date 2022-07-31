import { createGlobalStyle } from 'styled-components';

//yarn add styled-reset
import reset from 'styled-reset';

export const lightTheme = {
    fontColor: '#333333',
    bgColor: 'white',
};

export const darkTheme = {
    fontColor: 'white',
    bgColor: '#333333',
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
