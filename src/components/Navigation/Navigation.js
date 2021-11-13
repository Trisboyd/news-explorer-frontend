import React from 'react';
import { NavWrapper, NavLink, NavMenu, NavMenuBar } from './styledNavigation';

const Navigation = (props) => {

    const linkText = () => {
        if (props.loggedIn) {
            return props.name
        }
        return 'Sign in'
    }

    const openPopupForm = () => {
        props.openPopupForm();
    }

    const openPopupMenu = () => {
        props.openPopupMenu();
    }

    return (
        <NavWrapper>
            <NavMenu 
            onClick={openPopupMenu}
            isOpen={props.isPopupMenuOpen}>
                <NavMenuBar />
                <NavMenuBar />
            </NavMenu>
            <NavLink
                color={props.color}>
                Home
            </NavLink>
            {props.loggedIn ? <NavLink>Saved Articles</NavLink> : ''}
            <NavLink
                onClick={openPopupForm}
                color={props.color}>
                {linkText()}
            </NavLink>
        </NavWrapper>
    )
}

export default Navigation;