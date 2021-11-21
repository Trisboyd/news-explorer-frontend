import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { NewsListWrapper, NewsList, NewsListTitle, NewsListButton } from './styledNewsCardList';

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
                {props.articles.slice(0, props.articles.length).map((article) => {
                    return (
                        <NewsCard
                            key={props.articles.indexOf(article)}
                            //to be replaced with article._id
                            savedNews={props.savedNews}
                            // label={article.label}
                            image={article.urlImage}
                            date={article.publishedAt}
                            headline={article.title}
                            text={article.description}
                            source={article.source.name} />)
                })}
            </NewsList>
            <NewsListButton
                width={'288px'}
                color={'#FFF'}
                textColor={'#000'}
                onClick={resultsClickHandler}
                hoverColor={'#E8E8E8'}>
                {message}
            </NewsListButton>
        </ NewsListWrapper>
    )
}

export default NewsCardList;