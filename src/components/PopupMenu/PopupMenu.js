import React from 'react';
import { MainButton } from '../Main/styledMain';
import { Overlay, PopupExit } from '../PopupWithForm/styledPopupWithForm';
import { MenuHomeLink, MenuPopupContainer, MenuPopupWrap } from './styledPopupMenu';

const PopupMenu = (props) => {

    const closePopupMenu = () => {
        props.closePopupMenu();
    }

    const openPopupForm = () => {
        props.closePopupMenu();
        props.openPopupForm();
    }

    return (
        <Overlay isOpen={props.popupMenuOpen}>
            <MenuPopupWrap>
                <PopupExit
                    height={'24px'}
                    width={'24px'}
                    top={'-30px'}
                    right={'16px'}
                    onClick={closePopupMenu} />
                <MenuPopupContainer>
                    <MenuHomeLink
                        onClick={closePopupMenu}
                    >Home
                    </MenuHomeLink>
                    <MainButton
                        width={'288px'}
                        color={'rgba(0, 0, 0, 0)'}
                        textColor={'#FFF'}
                        height={'56px'}
                        border={'1px solid white'}
                        onClick={openPopupForm}
                    >Sign in</MainButton>
                </MenuPopupContainer>
            </MenuPopupWrap>
        </Overlay>
    )
}

export default PopupMenu;