import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PopupMessageTitle = styled.p`
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin: 43px 0 14px 36px;
`
//should this be a LINK or just p that opens up a different popup?
export const PopupSigninLink = styled(Link)`
    font-size: 18px;
    line-height: 22px;
    color: #2F71E5;
    margin: 0 0 51px 36px;
    text-decoration: none;
`