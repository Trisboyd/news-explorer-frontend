import React from 'react';
import github from '../../images/github-vector.svg';
import facebook from '../../images/facebook-vector.svg';
import { FooterBlock, Copyright, Links, TextLinks, TextLink, SocialLinks, SocialLink } from './styledFooter';

const Footer = () => {

    return (
        <FooterBlock>
            <Copyright>© 2021 Supersite, Powered by News API</Copyright>
            <Links>
                <TextLinks>
                    <TextLink href='#'>Home</TextLink>
                    <TextLink href='www.practicum.yandex.com'>Practicum by Yandex</TextLink>
                </TextLinks>
                <SocialLinks>
                    <SocialLink href='https://github.com/Trisboyd'>
                        <img src={github} alt='logo' />
                    </SocialLink>
                    <SocialLink href='https://www.facebook.com/tristan.boyd.58'>
                        <img src={facebook} alt='logo' />
                    </SocialLink>
                </SocialLinks>
            </Links>
        </FooterBlock>
    )
}

export default Footer;