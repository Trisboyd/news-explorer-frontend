import React from 'react';
import Header from '../Header/Header';
import { SavedHeader, SavedHeaderWrapper, SavedKeywords, SavedKeywordsSpan, SavedMessage } from './styledSavedNewsHeader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedNewsHeader = (props) => {

        
    // User info imported by context
    const currentUser = React.useContext(CurrentUserContext);

    const openPopupForm = () => {
        props.openPopupForm();
    }

    const openPopupMenu = () => {
        props.openPopupMenu();
    }

    const signout = () => {
        props.signout();
    }

    return (
        <SavedHeaderWrapper>
            <Header
                loggedIn={props.loggedIn}
                openPopupForm={openPopupForm}
                openPopupMenu={openPopupMenu}
                signout={signout}
                isPopupMenuOpen={props.isPopupMenuOpen}
                color={props.color}
            />
            <SavedHeader>Saved Articles</SavedHeader>
            <SavedMessage>{currentUser.name}, you have {props.number} saved <br /> articles</SavedMessage>
            <SavedKeywords>By keywords:
                <SavedKeywordsSpan> {props.keywords}</SavedKeywordsSpan>
            </SavedKeywords>
        </SavedHeaderWrapper>
    )
}

export default SavedNewsHeader;