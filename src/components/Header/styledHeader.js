import styled from 'styled-components';
import { devices } from '../../utilities/constants';

export const HeaderBar = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 7.2vw;
    height: 80px;
    border-bottom: solid 1px #C4C4C4;
    z-index: ${props => props.menuPopupOpen ? '2' : '0'};

    @media ${devices.tablet} {
        max-height: 8.5vw;
    }

    @media ${devices.mobileL} {
        max-height: 17.5vw;
    }
`
export const HeaderTitle = styled.p`
    font-size: 20px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    color: ${props => props.color};
    position: relative;
`