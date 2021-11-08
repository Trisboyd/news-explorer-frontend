import { PromiseProvider } from 'mongoose';
import React from 'react';
import { Overlay, PopupContainer, PopupExit, PopupForm } from '../PopupWithForm/styledPopupWithForm';
import { PopupMessageTitle, PopupSigninLink } from './styledPopupMessage';

const PopupMessage = (props) => {

    return (
        <Overlay isOpen={props.isOpen}>
            <PopupContainer>
                <PopupForm>
                    <PopupExit onClick={props.closePopup} />
                    <PopupMessageTitle>Registration successfully completed!</PopupMessageTitle>
                    <PopupSigninLink>Sign in</PopupSigninLink>
                </PopupForm>
            </PopupContainer>
        </Overlay>
    )
}

export default PopupMessage;