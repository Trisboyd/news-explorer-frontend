import React from 'react';
import { NavWrapper, NavLink } from './styledNavigation';

const Navigation = (props) => {

    const linkText = () => {
        if (props.loggedIn) {
            return props.name
        }
        return 'Sign in'
    }

    const openPopup = () => {
        props.openPopup();
    }

    return (
        <NavWrapper>
            <NavLink>Home</NavLink>
            {props.loggedIn ? <NavLink>Saved Articles</NavLink> : ''}
            <NavLink onClick={openPopup}>
                {linkText()}
                </NavLink>
        </NavWrapper>
    )
}

export default Navigation;