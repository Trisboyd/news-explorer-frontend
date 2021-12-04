import React from 'react';
import Navigation from '../Navigation/Navigation';
import { HeaderBar, HeaderTitle } from './styledHeader';
import { useLocation } from 'react-router-dom';

// _______________________________________________styles
import { ThemeProvider } from "styled-components";
import { mainTheme, savedTheme } from '../Styles/ThemeStyles';


//_______________________________________________Header component
const Header = (props) => {

    const location = useLocation().pathname.substring(1);

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
            <HeaderBar>
                <HeaderTitle>NewsExplorer</HeaderTitle>
                <Navigation
                    loggedIn={props.loggedIn}
                    openPopupForm={openPopupForm}
                    color={props.color}
                    openPopupMenu={openPopupMenu}
                    isPopupMenuOpen={props.isPopupMenuOpen}
                    signout={signout} />
            </HeaderBar>
        </ThemeProvider>
    )
}

export default Header;