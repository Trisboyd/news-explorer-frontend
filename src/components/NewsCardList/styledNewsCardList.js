import styled from 'styled-components';
import { devices } from '../../utilities/constants';

export const NewsListWrapper = styled.section`
    background-color: #F5F6F7;
    padding: 80px 0;
`

export const NewsList = styled.div`
    max-width: 85.6%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(440px, 576px));
    grid-row-gap: 16px;
    grid-column-gap: 40px;
    margin: auto;
    justify-items: center;
`
export const NewsListTitle = styled.h2`
    font-size: 40px;
    line-height: 1.15;
    color: #1A1B22;
    margin: 0 0 64px 7vw;
`
export const NewsListButton = styled.button`
position: ${props => props.position};
width: ${props => props.width};
height: 64px;
top: ${props => props.top};
right: ${props => props.right};
margin: 64px auto 0 auto;
background: ${props => props.color};
border-radius: 100px;
font-weight: 500;
font-size: 18px;
line-height: 1.33;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: ${props => props.textColor};
border: none;

:hover {
background: ${props => props.hoverColor};
cursor: pointer;
}

:checked {
color:  ${props => props.checkedColor};
}

@media ${devices.laptop} {
    height: 56px;
}
`