import styled from 'styled-components';
import { devices } from '../../utilities/constants';
import image from '../../images/main-background.png';

export const MainLayout = styled.div`
width: 100vw;
min-height: 40vw;
background-image: url(${image});
background-color: black;
background-size: contain;
background-repeat: no-repeat;
display: flex;
flex-direction: column;

@media ${devices.laptop}{
    height: 52vw;
    background-size: cover;
}

@media ${devices.tablet}{
    height: 75vw;
}

@media ${devices.mobileL}{
    height: 120vw;
}

@media ${devices.mobileM}{
    height: 164vw;
}
`
export const MainTitle = styled.h1`
width: 42vw;
font-size: 60px;
line-height: 1.07;
color: #FFFFFF;
margin: auto;

@media ${devices.laptop} {
    width: 50vw;
    font-size: 36px;
    line-height: 40px;
    margin: 5% auto 2% auto;
}

@media ${devices.tablet} {
    width: 75vw;
}

@media ${devices.mobileL} {
    width: 89vw;
}
`
export const MainSubtitle = styled.p`
width: 42vw;
font-size: 18px;
line-height: 1.33;
color: #FFFFFF;
margin: auto;

@media ${devices.laptop} {
    width: 50vw;
    margin: 0 auto;
}
@media ${devices.tablet} {
    width: 75vw;
}

@media ${devices.mobileL} {
    width: 89vw;
    margin-bottom: 122px;
}
`
export const MainInputWrapper = styled.div`
width: 42vw;
height: 64px;
margin: auto;
position: relative;

@media ${devices.laptop} {
    width: 50vw;
    height: 56px;
    margin: 6% auto;
}
@media ${devices.tablet} {
    width: 75vw;
}
`

export const MainInput = styled.input`
width: 100%;
height: 100%;
background: #FFFFFF;
border: 1px solid #D1D2D6;
box-sizing: border-box;
backdrop-filter: blur(8px);
border-radius: 100px;
margin: auto;
padding-left: 24px;
font-size: 16px;
line-height: 1.37;
color: #1A1B22;
`

export const MainButton = styled.button`
position: ${props => props.position};
width: ${props => props.width};
height: ${props => props.height};
top: ${props => props.top};
right: ${props => props.right};
margin: auto;
background: ${props => props.color};
box-shadow: 0px 5px 15px rgba(14, 26, 57, 0.2);
border-radius: 100px;
font-weight: 500;
font-size: 18px;
line-height: 1.33;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: ${props => props.textColor};
border: ${props => props.border};

:hover {
background: ${props => props.hoverColor};
cursor: pointer;
}

:checked {
color:  ${props => props.checkedColor};
}

@media ${devices.tablet} {
    position: relative;
    width: 100%;
}
`