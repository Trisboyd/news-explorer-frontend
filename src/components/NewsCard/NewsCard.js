import React from 'react';
import {
    NewsWrap, NewsMark, NewsDate, NewsHeadline,
    NewsImage, NewsImageLabel, NewsMarkWrap, NewsTextWrap, NewsSource, NewsText, NewsImageContainer, NewsMarkMessageWrap, NewsMarkMessage
} from './styledNewsCard';
import mark from '../../images/bookmark.svg';
import markBlue from '../../images/bookmarkBlue.png';
import trash from '../../images/trash.png'

const NewsCard = (props) => {

    const articleData = {
        keyword: props.keyword,
        title: props.headline,
        date: props.date,
        text: props.text,
        source: props.source,
        image: props.image,
        link: props.link
    }

    const [bookmark, setBookmark] = React.useState(mark);

    const [isSaved, setIsSaved] = React.useState(false);

    const [isShown, setIsShown] = React.useState(false);

    const clickMarkHandler = () => {
        if (bookmark === mark && props.loggedIn) {
            props.saveArticle(articleData)
            setBookmark(markBlue)
            setIsSaved(true);
        }
        else {
            setBookmark(mark)
            setIsSaved(false)
            props.openPopupForm();
        };
    }

    const removeArticle = () => {
        props.removeArticle(props.article);
    }

    return (
        <>
            <NewsWrap>
                <NewsImageContainer>
                    <NewsImageLabel savedNews={props.savedNews}>{props.keyword}</NewsImageLabel>
                    <NewsImage src={props.image} />
                    <NewsMarkMessageWrap>
                        <NewsMarkMessage
                            isShown={isShown}>Sign in to save articles</NewsMarkMessage>
                        <NewsMarkWrap>
                            <NewsMark
                                onMouseEnter={() => !props.loggedIn && setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                                src={props.savedNews ? trash : bookmark}
                                onClick={props.savedNews ? removeArticle : clickMarkHandler}
                                isSaved={isSaved}
                                isShown={isShown} />
                        </NewsMarkWrap>
                    </NewsMarkMessageWrap>
                </NewsImageContainer>
                <NewsTextWrap>
                    <NewsDate>{props.date}</NewsDate>
                    <NewsHeadline href={props.link} target="_blank">{props.headline}</NewsHeadline>
                    <NewsText>{props.text}</NewsText>
                    <NewsSource>{props.source}</NewsSource>
                </NewsTextWrap>
            </NewsWrap>

        </ >
    )
}

export default NewsCard;