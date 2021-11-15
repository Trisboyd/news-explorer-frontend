import { createGlobalStyle } from 'styled-components';
import RobotoRegular from '../../fonts/Roboto-Regular.ttf'
import RobotoSlab from '../../fonts/RobotoSlab-Regular.ttf';
import SourceSansPro from '../../fonts/SourceSansPro-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'RobotoRegular';
        src: local('Roboto-Regular'), local('Roboto-Regular'),
        url(${RobotoRegular}) format('truetypefont'),
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'RobotoSlab-Regular';
        src: local('RobotoSlab-Regular'), local('RobotoSlab-Regular'),
        url(${RobotoSlab}) format('truetypefont'),
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'SourceSansPro-Regular';
        src: local('SourceSansPro-Regular'), local('SourceSansPro-Regular'),
        url(${SourceSansPro}) format('truetypefont'),
        font-weight: 300;
        font-style: normal;
    }

    h1 h2 h3 {
        font-family: Roboto Slab;
    }

    p a {
        font-family: Roboto;
    }

    a {
        cursor: pointer;
    }
`;