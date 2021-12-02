import React from 'react';
import Navigation from '../Navigation/Navigation';
import { HeaderBar, HeaderTitle } from './styledHeader';

//____________________________________styled components


//_______________________________________________Header component
const Header = (props) => {

    const openPopupForm = () => {
        props.openPopupForm();
    }

    const openPopupMenu = () => {
        props.openPopupMenu();
    }

    return (
        <HeaderBar>
            <HeaderTitle color={props.color}>NewsExplorer</HeaderTitle>
            <Navigation
                loggedIn={props.loggedIn}
                openPopupForm={openPopupForm}
                color={props.color}
                openPopupMenu={openPopupMenu}
                isPopupMenuOpen={props.isPopupMenuOpen} />
        </HeaderBar>
    )
}

export default Header;