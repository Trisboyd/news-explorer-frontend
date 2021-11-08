import React from 'react';
import Navigation from '../Navigation/Navigation';
import { HeaderBar, HeaderTitle } from './styledHeader';

//____________________________________styled components


//_______________________________________________Header component
const Header = (props) => {

    const openPopup = () => {
        props.openPopup();
    }

    return (
        <HeaderBar>
            <HeaderTitle color={props.color}>NewsExplorer</HeaderTitle>
            <Navigation
                loggedIn={props.loggedIn}
                openPopup={openPopup}
                color={props.color} />
        </HeaderBar>
    )
}

export default Header;