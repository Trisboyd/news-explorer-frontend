import styled from 'styled-components';
import { devices } from '../../utilities/constants';

export const NavWrapper = styled.div`
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
right: 0;
top: 30%;
`

export const NavMenuBar = styled.div`
background-image: ${props => props.color};
visibility: hidden;
width: 16px;
height: 2px;
margin-top: 4px;

@media ${devices.mobileL} {
    visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
}
`

export const NavLink = styled.a`
display: flex;
justify-content: center;
font-size: 18px;
line-height: 1.33;
display: flex;
align-items: center;
text-align: center;
margin: auto 42px auto 0;
/* height: 80px; */
color: ${props => props.color};

:hover {
border-bottom: 3px solid ${props => props.color};
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
    height: 40px;
    width: 152px;
}

@media ${devices.tablet} {
    height: 24px;
    width: 120px;
    margin-top: 
}
}

@media ${devices.tablet} {
    margin: auto 20px auto 0;
}

@media ${devices.mobileL} {
    visibility: hidden;
    width: 0;
}
`