import React from 'react';
import { PreloaderMessage, PreloaderWrap } from '../Preloader/styledPreloader';
import { NoResultsMessage } from './styledNoResults';

const NoResults = () => {

    return(
        <PreloaderWrap>
            <NoResultsMessage>Nothing found</NoResultsMessage>
            <PreloaderMessage>Sorry, but nothing matched <br /> your search terms.</PreloaderMessage>
        </PreloaderWrap>
    )
}

export default NoResults;