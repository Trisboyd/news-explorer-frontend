import React from 'react';
import { NewsList, NewsListWrapper } from '../NewsCardList/styledNewsCardList';
import NewsCard from '../NewsCard/NewsCard';

const SavedNews = (props) => {

    return (
        <NewsListWrapper>
            <NewsList>
                {props.articles.map((article) => {
                    return (
                        <NewsCard
                            key={props.articles.indexOf(article)}
                            //to be replaced with article._id
                            savedNews={props.savedNews}
                            label={article.label}
                            image={article.image}
                            date={article.date}
                            headline={article.headline}
                            text={article.text}
                            source={article.source} />)
                })}
            </NewsList>
        </NewsListWrapper>
    )
}

export default SavedNews;