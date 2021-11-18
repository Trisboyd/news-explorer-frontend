import styled from 'styled-components';
import { devices } from '../../utilities/constants';

export const NewsWrap = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    background: #FFF;
    border-radius: 5%;
    margin: auto;

    :last-of-type {
        margin-bottom: 64px;
    }

    @media ${devices.mobileL} {
    max-width: 85.6vw;
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
    visibility: ${props => props.savedNews ? 'visible' : 'hidden'}};
`

export const NewsImage = styled.img`
    width: 100%;
    border-radius: 5% 5% 0 0;
`

export const NewsMarkMessageWrap = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 5%;
    top: 5%;
`

export const NewsMarkMessage = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    border-radius: 10px;
    background: white;
    margin: 0 2px 0 0;
    padding: 11px 20px;
    opacity: ${(props) => (props.isShown ? '1' : '0')};
    transition: opacity .3s ease;
`

export const NewsMarkWrap = styled.button`
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
`
export const NewsMark = styled.img`
    max-width: 24px;
    max-height: 24px;
    margin: auto;
    opacity: ${props => props.isSaved ? '1' : '0.3'};
    cursor: pointer;
    transition: opacity .3s ease;

    &:hover {
        opacity: 1;
    }
`
export const NewsTextWrap = styled.div`
    width: 88%;
    height: 304px;
    display: flex;
    flex-direction: column;
    margin-left: 22px;
`
export const NewsDate = styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
    display: flex;
    align-items: center;
    color: #B6BCBF;
    margin: 20px 0 0 0;
    font-family: SourceSansPro;
`
export const NewsHeadline = styled.h3`
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 1.15;
    color: #1A1B22;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 12px 0 0 0;
`
export const NewsText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
    color: #1A1B22;
    margin: 16px 0 0 0;
    height: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const NewsSource = styled.p`
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    letter-spaceing: .4px;
    text-transform: uppercase;
    color: #B6BCBF;
    justify-self: flex-end;
    margin-bottom: 24px;
    font-family: RobotoSlab;
`