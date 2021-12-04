import React from 'react';
import { NavWrapper, NavLink, NavMenu, NavMenuBar, NavLogout } from './styledNavigation';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// _______________________________________________styles
import { ThemeProvider } from "styled-components";
import { mainTheme, savedTheme } from '../Styles/ThemeStyles';

const Navigation = (props) => {

    // ______________________________________________________User info imported by context
    const currentUser = React.useContext(CurrentUserContext);

    // ________________________________determine location on web app
    const location = useLocation().pathname.substring(1);

    const linkText = () => {
        if (props.loggedIn) {
            return currentUser.name
        }
        return 'Sign in'
    }

    const openPopupForm = () => {
        props.openPopupForm();
    }

    const openPopupMenu = () => {
        props.openPopupMenu();
    }

    const signout = () => {
        props.signout();
    }

    return (
        <ThemeProvider theme={location === 'saved-news' ? savedTheme : mainTheme}>
            <NavWrapper>
                <NavMenu
                    onClick={openPopupMenu}
                    isOpen={props.isPopupMenuOpen}>
                    <NavMenuBar />
                    <NavMenuBar />
                </NavMenu>
                <NavLink
                    color={props.color}
                    to='/'
                    active = {location === ''}>
                    Home
                </NavLink>
                {props.loggedIn && <NavLink
                    color={props.color}
                    to='/saved-news'
                    active={location === 'saved-news'}>
                    Saved Articles</NavLink>}
                <NavLink
                    onClick={openPopupForm}
                    color={props.color}
                    to='#'>
                    {linkText()}
                    {props.loggedIn &&
                        <NavLogout
                            onClick={signout}
                        />}
                </NavLink>
            </NavWrapper>
        </ThemeProvider>
    )
}

export default Navigation;