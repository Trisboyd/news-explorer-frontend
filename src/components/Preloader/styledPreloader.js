import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
	100% {
		transform: rotate(360deg);
	}
`

export const PreloaderWrap = styled.section`
    width: 100vw;
    height: 282px;
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    position: relative;
    background: #F5F6F7;
`
export const PreloaderImage = styled.div`
    display: block;
    width: 50px;
    height: 50px;
    border: 4px solid #444;
    border-bottom-color: #888;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    animation: ${rotate} .75s infinite linear;
`
export const PreloaderMessage = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
    text-align: center;
    color: #B6BCBF;
`