import styled from 'styled-components';
import { devices } from '../../utilities/constants';

export const FooterBlock = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100vw;
height: 22px;
padding: 33px 0;

@media ${devices.mobileL} {
flex-direction: column;
justify-content: flex-end;
min-height: 176px;
#a {order: 2;}
#b {order: 1;}
}
`
export const Copyright = styled.p`
font-size: 16px;
line-height: 1.37;
color: #B6BCBF;
margin: 0 0 0 7vw;

@media ${devices.mobileL} {
margin: 40px auto 22px auto;
}
`
export const Links = styled.div`
display: flex;
flex-direction: row;
margin-right: 6vw;

@media ${devices.laptop} {
    margin-top: 20px;
}

@media ${devices.mobileL} {
    margin: 20px auto 0 auto;
    width: 100vw;
}
`
export const TextLinks = styled.div`
display: flex;
flex-direction: row;
min-width: 290px;

@media ${devices.laptop} {
    min-width: 268px;
}

@media ${devices.mobileL} {
    flex-direction: column;
    height: 72px;
    min-width: 0;
    width: 200px;
    justify-content: space-between;
    margin-left: 16px;
}
`
export const TextLink = styled.a`
font-size: 18px;
line-height: 1.33;
color: #1A1B22;
text-decoration: none;
margin-right: 7%;

@media ${devices.laptop} {
    margin-right: 4%;
}

@media ${devices.mobileL} {
    margin-right: 0;
    max-width: 200px;
}
`
export const SocialLinks = styled.div`
display: flex;
flex-direction: row;

@media ${devices.mobileL} {
    margin-right: 18px;
}
`
export const SocialLink = styled.a`
width: 20px;
height: 20px;
margin-left: 35px;

@media ${devices.mobileL} {
    margin-left: 27px;
}
`
