import React from 'react';
import Header from '../Header/Header';
import { SavedHeader, SavedHeaderWrapper, SavedKeywords, SavedKeywordsSpan, SavedMessage } from './styledSavedNewsHeader';

const SavedNewsHeader = (props) => {

    return (
        <SavedHeaderWrapper>
            <Header 
            color={props.color} />
            <SavedHeader>Saved Articles</SavedHeader>
            <SavedMessage>{props.name} you have {props.number} saved <br /> articles</SavedMessage>
            <SavedKeywords>By keywords:
                <SavedKeywordsSpan> {props.keywords}</SavedKeywordsSpan>
            </SavedKeywords>
        </SavedHeaderWrapper>
    )
}

export default SavedNewsHeader;