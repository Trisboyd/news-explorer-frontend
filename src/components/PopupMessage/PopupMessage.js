import React from 'react';
import { Overlay, PopupContainer, PopupExit, PopupForm } from '../PopupWithForm/styledPopupWithForm';
import { PopupMessageContainer, PopupMessageTitle, PopupSigninLink } from './styledPopupMessage';

const PopupMessage = (props) => {

    const openSignup = () => {
        props.closePopup();
        props.openPopupForm();
    }

    return (
        <Overlay isOpen={props.isOpen}>
            <PopupContainer>
                <PopupMessageContainer>
                    <PopupExit
                        onClick={props.closePopup}
                        height={'40px'}
                        width={'40px'}
                        top={'-27%'}
                        right={'-10%'}
                        smallRight={'5%'}
                        smallSize={'24px'} />
                    <PopupMessageTitle>Registration successfully <br /> completed!</PopupMessageTitle>
                    <PopupSigninLink
                        onClick={openSignup}>
                        Sign in
                    </PopupSigninLink>
                </PopupMessageContainer>
            </PopupContainer>
        </Overlay>
    )
}

export default PopupMessage;