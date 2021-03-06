import styled from 'styled-components';
import { devices } from '../../utilities/constants';
import { Link } from 'react-router-dom';
 
export const NavWrapper = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative;
`

export const NavMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 20px;
position: absolute;
right: 16px;
top: 30%;
`

export const NavMenuBar = styled.div`
background-image: url(${props => props.theme.hamburger});
visibility: hidden;
width: 16px;
height: 2px;
margin-top: 4px;

@media ${devices.mobileL} {
    visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
}
`

export const NavLink = styled(Link)`
display: flex;
justify-content: center;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 1.33;
display: flex;
align-items: center;
text-align: center;
margin: auto 42px auto 0;
height: 78px;
text-decoration: none;
color: ${props => props.color};
border-bottom: ${(props) => (props.$active ? `3px solid ${props.theme.color}` : 'none')};

:hover {
cursor: pointer;
}

:last-of-type {
border: 1px solid ${props => props.color};
box-sizing: border-box;
border-radius: 100px;
width: 176px;
height: 48px;
margin-top: auto;

@media ${devices.laptop} {
    height: 38px;
    width: 152px;
}

@media ${devices.tablet} {
    width: 120px;
    margin-top: 
}

@media ${devices.mobileL} {
    width: 0;
}
}

@media ${devices.tablet} {
    margin: auto 20px auto 0;
    height: 64px;
}

@media ${devices.mobileL} {
    visibility: hidden;
    width: 0;
}
`
export const NavLogout = styled.div`
background-image: url(${props => props.theme.logout});
width: 24px;
height: 24px;
margin-left: 10%;
`