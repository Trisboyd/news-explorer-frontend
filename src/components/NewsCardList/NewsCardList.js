import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { NewsListWrapper, NewsList, NewsListTitle, NewsListButton } from './styledNewsCardList';
import { months } from '../../utilities/constants';

const NewsCardList = (props) => {

    const [resultsNum, setResultsNum] = React.useState(3);

    const addResults = () => {
        setResultsNum(resultsNum + 3);
        if (resultsNum > 100) {
            hideButton();
        }
    }

    const [visibility, setVisibility] = React.useState(true);

    const hideButton = () => {
        setVisibility(false);
    }

    const openPopupForm = () => {
        props.openPopupForm();
    }

    return (
        <NewsListWrapper>
            <NewsListTitle>Search results</NewsListTitle>
            <NewsList>

                {props.articles.slice(0, resultsNum).map((article) => {

                    // ________________________________change nature of article date so 
                    // ________________________________Date methods can be applied
                    article.publishedAt = new Date();

                    // ________________________________________format date for display
                    const formatDate = (date) => {
                        let day = date.getDate();
                        let year = date.getFullYear();
                        let month = labelMonth(date.getMonth());
                        return `${month} ${day}, ${year}`;
                    }

                    // ____________________________________convert month number to string name
                    const labelMonth = (num) => {
                        return months[num - 1];
                    }

                    return (
                        <NewsCard
                            // __________________________________article info
                            key={props.articles.indexOf(article)}
                            article={article}
                            keyword={props.keyword}
                            image={article.urlToImage}
                            date={formatDate(article.publishedAt)}
                            headline={article.title}
                            text={article.description}
                            source={article.source.name}
                            link={article.url}
                            // _______________________________settings props
                            savedNews={props.savedNews}
                            loggedIn={props.loggedIn}
                            saveArticle={props.saveArticle}
                            openPopupForm={openPopupForm} />)
                })}
            </NewsList>
            <NewsListButton
                width={'288px'}
                color={'#FFF'}
                textColor={'#000'}
                onClick={addResults}
                hoverColor={'#E8E8E8'}
                visible={visibility}>
                Show more
            </NewsListButton>
        </ NewsListWrapper>
    )
}

export default NewsCardList;