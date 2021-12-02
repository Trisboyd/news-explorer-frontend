import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../utilities/constants';

export const PopupMessageContainer = styled.div`
width: 430px;
background: #FFFFFF;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
border-radius: 10px;
display: flex;
flex-direction: column;
z-index: 3;

@media ${devices.mobileL} {
    width: 320px;
}
`

export const PopupMessageTitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin: 43px 0 14px 36px;
`
//should this be a LINK or just p that opens up a different popup?
export const PopupSigninLink = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #2F71E5;
    margin: 0 0 51px 36px;
    text-decoration: none;
`