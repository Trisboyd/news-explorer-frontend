import React from 'react';
import Header from '../Header/Header';
import { SavedHeader, SavedHeaderWrapper, SavedKeywords, SavedKeywordsSpan, SavedMessage } from './styledSavedNewsHeader';

const SavedNewsHeader = (props) => {

    const openPopupForm = () => {
        props.openPopupForm();
    }

    const openPopupMenu = () => {
        props.openPopupMenu();
    }

    return (
        <SavedHeaderWrapper>
            <Header
                loggedIn={props.loggedIn}
                openPopupForm={openPopupForm}
                openPopupMenu={openPopupMenu}
                isPopupMenuOpen={props.isPopupMenuOpen}
                color={props.color}
            />
            <SavedHeader>Saved Articles</SavedHeader>
            <SavedMessage>{props.name} you have {props.number} saved <br /> articles</SavedMessage>
            <SavedKeywords>By keywords:
                <SavedKeywordsSpan> {props.keywords}</SavedKeywordsSpan>
            </SavedKeywords>
        </SavedHeaderWrapper>
    )
}

export default SavedNewsHeader;