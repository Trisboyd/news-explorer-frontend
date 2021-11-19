import styled from 'styled-components';
import { devices } from '../../utilities/constants';

export const SavedHeaderWrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 56px;
`
export const SavedHeader = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
    color: rgba(26, 27, 34, 0.5);
    margin-top: 40px;
    margin-left: 7vw;
`
export const SavedMessage = styled.h3`
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 400;
    font-size: 40px;
    line-height: 1.15;
    color: #1A1B22;
    margin: 28px 0 30px 7vw;

    @media ${devices.mobileL} {
    font-size: 30px;
    line-height: 1.13;
    }
`
export const SavedKeywords = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
    color: #1A1B22;
    margin-left: 7vw;
`
export const SavedKeywordsSpan = styled.span`
    font-weight: 700;
`