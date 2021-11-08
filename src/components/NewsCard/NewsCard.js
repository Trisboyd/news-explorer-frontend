import React from 'react';
import {
    NewsWrap, NewsMark, NewsDate, NewsHeadline,
    NewsImage, NewsImageLabel, NewsMarkWrap, NewsTextWrap, NewsSource, NewsText, NewsImageContainer
} from './styledNewsCard';
import mark from '../../images/article-mark.png';

const NewsCard = (props) => {

    return (
        <>
        <NewsWrap>
            <NewsImageContainer>
                <NewsImageLabel visible={props.loggedIn ? 'visible' : 'hidden'}>{props.label}</NewsImageLabel>
                <NewsImage src={props.image} />
                <NewsMarkWrap>
                    <NewsMark src={mark} />
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