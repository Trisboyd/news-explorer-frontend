import React from 'react';
import Header from '../Header/Header';
import { SavedHeader, SavedHeaderWrapper, SavedKeywords, SavedKeywordsSpan, SavedMessage } from './styledSavedNewsHeader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedNewsHeader = (props) => {

    // _________________________________________________keywords
    const [keywords, setKeywords] = React.useState([]);

    const [keysMessage, setKeysMessage] = React.useState('');
        
    // __________________________________________________User info imported by context
    const currentUser = React.useContext(CurrentUserContext);

    const userArticles = props.savedArticles.filter((article) => currentUser.id === article.owner);

    const openPopupForm = () => {
        props.openPopupForm();
    }

    const openPopupMenu = () => {
        props.openPopupMenu();
    }

    const signout = () => {
        props.signout();
    }

    const sortKeywords = () => {
        const keys = userArticles.map((article) => article.keyword)
        const keyTerms = new Set(keys);
        const keysArray = Array.from(keyTerms);
        setKeywords(keysArray);
    }

    const filterKeysMessage = () => {
        sortKeywords();
        let message =''
        if (keywords.length === 3) {
            message = `${keywords[0]}, ${keywords[1]}, and ${keywords[2]}.`
        }
        else if (keywords.length === 2) {
            message = `${keywords[0]} and ${keywords[1]}.`
        }
        else if (keywords.length === 1) {
            message = `${keywords[0]}.`
        }
        else if (keywords.length > 3) {
            message = `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} others.`
        }
        setKeysMessage(message);
    }

    React.useEffect(()=> {
        filterKeysMessage();
    }, [props.saveArticle, props.removeArticle]);

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
            <SavedMessage>
                {currentUser.name}, you have {userArticles.length} saved <br /> article
                {userArticles.length > 1 ? 's' : ''}
                </SavedMessage>
            <SavedKeywords>By keywords:
                <SavedKeywordsSpan> {keysMessage}</SavedKeywordsSpan>
            </SavedKeywords>
        </SavedHeaderWrapper>
    )
}

export default SavedNewsHeader;