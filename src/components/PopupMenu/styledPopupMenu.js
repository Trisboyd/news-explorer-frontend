import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuPopupWrap = styled.div`
height: 30%;
position: absolute;
top: 17.7vw;
background: #000;
width: 100vw;
`
export const MenuPopupContainer = styled.div`
max-width: 90vw;
display: flex;
flex-direction: column;
padding-left: 16px;
`

export const MenuLink = styled(Link)`
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 3.11;
color: #FFFFFF;
text-decoration: none;
cursor: pointer;
`