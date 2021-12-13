import React from 'react';
import { MainButton } from '../Main/styledMain';
import { Overlay, PopupExit } from '../PopupWithForm/styledPopupWithForm';
import { MenuLink, MenuPopupContainer, MenuPopupWrap } from './styledPopupMenu';
import { NavLogout } from '../Navigation/styledNavigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// _______________________________________________styles
import { ThemeProvider } from "styled-components";
import { mainTheme } from '../Styles/ThemeStyles';

const PopupMenu = (props) => {

    // ______________________________________________________User info imported by context
    const currentUser = React.useContext(CurrentUserContext);

    const closePopupMenu = () => {
        props.closePopupMenu();
    }

    const openPopupForm = () => {
        props.closePopupMenu();
        props.openPopupForm();
    }

    const linkText = () => {
        if (props.loggedIn) {
            return currentUser.name
        }
        return 'Sign in'
    }

    const signout = () => {
        props.signout();
    }

    const handleAuthClick = () => {
        if (!props.loggedIn) {
            openPopupForm();
        }
        else signout();
    };

    return (
        <ThemeProvider theme={mainTheme}>
        <Overlay isOpen={props.popupMenuOpen}>
            <MenuPopupWrap>
                <PopupExit
                    height={'24px'}
                    width={'24px'}
                    top={'-30px'}
                    right={'16px'}
                    onClick={closePopupMenu} />
                <MenuPopupContainer>
                    <MenuLink
                        onClick={closePopupMenu}
                        to={'/'}
                    >Home
                    </MenuLink>
                    <MenuLink
                        onClick={closePopupMenu}
                        to={'/saved-news'}
                    >Saved Articles
                    </MenuLink>
                    <MainButton
                        width={'288px'}
                        color={'rgba(0, 0, 0, 0)'}
                        textColor={'#FFF'}
                        height={'56px'}
                        border={'1px solid white'}
                        onClick={handleAuthClick}
                    >{linkText()}
                    {props.loggedIn && <NavLogout />}
                    </MainButton>
                </MenuPopupContainer>
            </MenuPopupWrap>
        </Overlay>
        </ ThemeProvider>
    )
}

export default PopupMenu;