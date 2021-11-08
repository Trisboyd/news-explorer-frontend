import styled from 'styled-components';

export const HeaderBar = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 104px;
    height: 80px;
    border-bottom: solid 1px #C4C4C4;
`
export const HeaderTitle = styled.p`
    font-size: 20px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    color: ${props => props.color};
`