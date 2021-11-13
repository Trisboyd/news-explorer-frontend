import styled from 'styled-components';

export const NewsWrap = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    background: #FFF;
    border-radius: 5%;

    :last-of-type {
        margin-bottom: 64px;
    }
`
export const NewsImageContainer = styled.div`
    position: relative;
    width: 100%;
`
export const NewsImageLabel = styled.div`
    position: absolute;
    left: 5%;
    top: 5%;
    height: 40px;
    background: #FFFFFF;
    box-shadow: 0px 10px 22px rgba(59, 74, 116, 0.1);
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 8px 22px;
    visibility: ${props => props.visible};
`

export const NewsImage = styled.img`
    width: 100%;
    height: 272px;
    border-radius: 5% 5% 0 0;
`
export const NewsMarkWrap = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    right: 5%;
    top: 5%;
    background: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
`
export const NewsMark = styled.img`
    width: 14px;
    height: 19px;
    margin: auto;
`
export const NewsTextWrap = styled.div`
    width: 88%;
    height: 304px;
    display: flex;
    flex-direction: column;
    margin-left: 22px;
`
export const NewsDate = styled.p`
    font-size: 18px;
    line-height: 1.33;
    display: flex;
    align-items: center;
    color: #B6BCBF;
    margin: 20px 0 0 0;
`
export const NewsHeadline = styled.h3`
    font-size: 26px;
    line-height: 1.15;
    color: #1A1B22;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 12px 0 0 0;
`
export const NewsText = styled.p`
    font-size: 16px;
    line-height: 1.37;
    color: #1A1B22;
    margin: 16px 0 0 0;
    height: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const NewsSource = styled.p`
    font-size: 16px;
    line-height: 1.25;
    letter-spaceing: .4px;
    text-transform: uppercase;
    color: #B6BCBF;
    justify-self: flex-end;
    margin-bottom: 24px;
`