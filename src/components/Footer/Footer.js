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
                    <SocialLink><img src={github} /></SocialLink>
                    <SocialLink><img src={facebook} /></SocialLink>
                </SocialLinks>
            </Links>
        </FooterBlock>
    )
}

export default Footer;