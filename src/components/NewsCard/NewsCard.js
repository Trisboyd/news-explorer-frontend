import React from 'react';
import {
    NewsWrap, NewsMark, NewsDate, NewsHeadline,
    NewsImage, NewsImageLabel, NewsMarkWrap, NewsTextWrap, NewsSource, NewsText, NewsImageContainer
} from './styledNewsCard';
import mark from '../../images/bookmark.svg';
import markBlue from '../../images/bookmarkBlue.png';
import trash from '../../images/trash.png'

const NewsCard = (props) => {

    const [bookmark, setBookmark] = React.useState(mark);

    const [favorited, setFavorited] = React.useState(false);

    const articleImage = () => {
        if (props.savedNews) {
            return trash;
        }
        else return bookmark;
    }

    const clickMarkHandler = () => {
        if (bookmark === mark) {
            setBookmark(markBlue)
            setFavorited(true);
        }
        else setBookmark(mark)
             setFavorited(false);
    }

    return (
        <>
            <NewsWrap>
                <NewsImageContainer>
                    <NewsImageLabel savedNews={props.savedNews}>{props.label}</NewsImageLabel>
                    <NewsImage src={props.image} />
                    <NewsMarkWrap>
                        <NewsMark 
                        src={articleImage()}
                        onClick={clickMarkHandler}
                        clicked={favorited} />
                    </NewsMarkWrap>
                </NewsImageContainer>
                <NewsTextWrap>
                    <NewsDate>{props.date}</NewsDate>
                    <NewsHeadline>{props.headline}</NewsHeadline>
                    <NewsText>{props.text}</NewsText>
                    <NewsSource>{props.source}</NewsSource>
                </NewsTextWrap>
            </NewsWrap>

        </ >
    )
}

export default NewsCard;