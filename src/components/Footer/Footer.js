import React from 'react';
import github from '../../images/github-vector.svg';
import facebook from '../../images/facebook-vector.svg';
import { FooterBlock, Copyright, Links, TextLinks, TextLink, SocialLinks, SocialLink } from './styledFooter';

const Footer = () => {

    return (
        <FooterBlock>
            <Copyright id='a'>© 2021 Supersite, Powered by News API</Copyright>
            <Links id='b'>
                <TextLinks>
                    <TextLink href='/'>Home</TextLink>
                    <TextLink
                        href='http://www.practicum.yandex.com'
                        target='_blank'>
                        Practicum by Yandex</TextLink>
                </TextLinks>
                <SocialLinks>
                    <SocialLink
                        href='https://github.com/Trisboyd'
                        target='_blank'>
                        <img src={github} alt='logo' />
                    </SocialLink>
                    <SocialLink
                        href='https://www.facebook.com/tristan.boyd.58'
                        target='_blank'>
                        <img src={facebook} alt='logo' />
                    </SocialLink>
                </SocialLinks>
            </Links>
        </FooterBlock>
    )
}

export default Footer;