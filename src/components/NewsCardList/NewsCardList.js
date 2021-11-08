import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { NewsListWrapper, NewsList, NewsListTitle } from './styledNewsCardList';
import { MainButton } from '../Main/styledMain';

const NewsCardList = (props) => {

    const [message, setMessage] = React.useState('Show more');

    const resultsClickHandler = () => {
        if (props.resultsNumber === 3) {
            showAllResults();
            setMessage('Show Less');
        }
        else if (props.resultsNumber !== 3) {
            resetResults();
            setMessage('Show more');
        }
    }

    const showAllResults = () => {
        props.showAllResults();
    }

    const resetResults = () => {
        props.resetResults();
    }

    return (
        <NewsListWrapper>
            {props.loggedIn ? '' : <NewsListTitle>Search results</NewsListTitle>}
            <NewsList>
                {props.articles.slice(0, props.resultsNumber).map((article) => {
                    return (
                        <NewsCard
                            loggedIn={props.loggedIn}
                            label={article.label}
                            image={article.image}
                            date={article.date}
                            headline={article.headline}
                            text={article.text}
                            source={article.source} />)
                })}
            </NewsList>
            <MainButton
                width={'288px'}
                color={'#E8E8E8'}
                textColor={'#000'}
                onClick={resultsClickHandler}>
                {message}
            </MainButton>
        </ NewsListWrapper>
    )
}

export default NewsCardList;