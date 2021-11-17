import * as styled from 'styled-components';
//____________________________________________________Roboto
import Roboto from '../../fonts/Roboto-Regular.ttf';
import RobotoMedium from '../../fonts/Roboto-Medium.ttf';
import RobotoBold from '../../fonts/Roboto-Bold.ttf';
import RobotoBlack from '../../fonts/Roboto-Black.ttf';
//___________________________________________________________Roboto Slab
import RobotoSlab from '../../fonts/RobotoSlab-Regular.ttf';
import RobotoSlabMedium from '../../fonts/RobotoSlab-Medium.ttf';
import RobotoSlabBold from '../../fonts/RobotoSlab-Bold.ttf';
import RobotoSlabBlack from '../../fonts/RobotoSlab-Black.ttf';
//_____________________________________________________________Source Sans Pro
import SourceSansPro from '../../fonts/SourceSansPro-Regular.ttf';
//______________________________________________________________Inter
import Inter from '../../fonts/Inter-Regular.ttf';

const FontStyles = styled.createGlobalStyle`
    //________________________________________________Roboto
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoMedium}) format('truetype');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBold}) format('truetype');
        font-weight: 700;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBlack}) format('truetype');
        font-weight: 900;
    }
    //________________________________________________Roboto Slab
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlab}) format('truetype');
        font-weight: 300;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabMedium}) format('truetype');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabBold}) format('truetype');
        font-weight: 700;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabBlack}) format('truetype');
        font-weight: 900;
    }
    //___________________________________________________Source Sans Pro
    @font-face {
        font-family: 'Source Sans Pro';
        src: url(${SourceSansPro}) format('truetype');
        font-weight: 400;
    }
    //______________________________________________________Inter
    @font-face {
        font-family: 'Inter';
        src: url(${Inter}) format('truetype');
        font-weight: 400;
    }
`
export default FontStyles;