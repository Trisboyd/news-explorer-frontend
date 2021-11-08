import styled from 'styled-components';

export const NavWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const NavLink = styled.a`
display: flex;
justify-content: center;
font-size: 18px;
line-height: 1.33;
display: flex;
align-items: center;
text-align: center;
margin-right: 42px;
height: 80px;
color: ${props => props.savedPage ? '#1A1B22' : '#FFFFFF'};

:hover {
border-bottom: 3px solid #FFF;
cursor: pointer;
}

:last-of-type {
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 100px;
width: 176px;
height: 48px;
margin-top: 18px;
}
`