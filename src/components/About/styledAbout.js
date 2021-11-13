import styled from 'styled-components';
import { devices } from '../../utilities/constants';

    export const AboutLayout = styled.section`
    display: flex;
    flex-direction: row;
    margin-left: 7vw;
    align-items: center;
    padding: 80px 0;

    @media ${devices.mobileL} {
        flex-direction: column;
        margin: auto;
    }
    `
    export const AboutImage = styled.img`
    width: 31vw;
    max-height: 464px;
    border-radius: 200px;

    @media ${devices.mobileL} {
    width: 90vw;
    }
    `
    export const AboutInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 42vw;
    margin-left: 3.8vw;

    @media ${devices.laptop} {
        width: 55vw;
    }

    @media ${devices.mobileL} {
        width: 90vw;
    }
    `
    export const AboutTitle = styled.h2`
    font-size: 40px;
    line-height: 1.15;
    color: #1A1B22;
    margin-bottom: 24px;
    `
    export const AboutText = styled.p`
    font-size: 18px;
    line-height: 1.33;
    color: #1A1B22;
    `