import React from 'react';
import { NewsList, NewsListWrapper } from '../NewsCardList/styledNewsCardList';
import NewsCard from '../NewsCard/NewsCard';

const SavedNews = (props) => {

    return (
        <NewsListWrapper>
            <NewsList>
                {props.savedArticles.map((article) => {

                    const { _id, keyword, title, text, date, source, link, image } = article;

                    return (
                        <NewsCard
                            savedNews={props.savedNews}
                            key={_id}
                            keyword={keyword}
                            image={image}
                            date={date}
                            headline={title}
                            text={text}
                            source={source}
                            link={link}
                            article={article}
                            removeArticle={props.removeArticle} />)
                })}
            </NewsList>
        </NewsListWrapper>
    )
}

export default SavedNews;