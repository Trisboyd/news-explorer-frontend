import React from 'react';
import { NewsList, NewsListWrapper } from '../NewsCardList/styledNewsCardList';
import NewsCard from '../NewsCard/NewsCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedNews = (props) => {

    // ______________________________________________________User info imported by context
    const currentUser = React.useContext(CurrentUserContext);

    const userArticles = props.savedArticles.filter((article) => currentUser.id === article.owner);

    return (
        <NewsListWrapper>
            <NewsList>
                {userArticles.map((article) => {

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