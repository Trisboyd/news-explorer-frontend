import styled from 'styled-components';
import { devices } from '../../utilities/constants';

export const HeaderBar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 7.2vw;
    height: 80px;
    border-bottom: solid 1px #C4C4C4;
    box-sizing: border-box;
    z-index: ${props => props.menuPopupOpen ? '2' : '0'};

    @media ${devices.tablet} {
        max-height: 8.5vw;
    }

    @media ${devices.mobileL} {
        max-height: 17.5vw;
        padding: 0;
    }
`
export const HeaderTitle = styled.p`
    font-family: 'Roboto-Slab', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    color: ${props => props.color};
    position: relative;

    @media ${devices.mobileL} {
    margin-left: 16px;
    }
`