import React from 'react';
import headshot from '../../images/headshot.jpg';
import { aboutInfo } from '../../utilities/constants';
import { AboutLayout, AboutImage, AboutInfoWrapper, AboutTitle, AboutText } from './styledAbout';

const About = () => {

    return(
        <AboutLayout>
            <AboutImage src={headshot} alt={headshot}/>
            <AboutInfoWrapper>
                <AboutTitle>About the author</AboutTitle>
                <AboutText>{aboutInfo.info}</AboutText>
            </AboutInfoWrapper>
        </AboutLayout>
    )
}

export default About;