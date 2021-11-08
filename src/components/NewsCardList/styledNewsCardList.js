import styled from 'styled-components';

export const NewsListWrapper = styled.section`
    background-color: #F5F6F7;
    padding: 80px 0;
`

export const NewsList = styled.div`
    max-width: 85.6%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(630px, 1fr));
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