import React from 'react';
import { PreloaderImage, PreloaderMessage, PreloaderWrap } from './styledPreloader';

const Preloader = () => {

    return(
        <PreloaderWrap>
            <PreloaderImage />
            <PreloaderMessage>Searching for news...</PreloaderMessage>
        </PreloaderWrap>
    )
}

export default Preloader;