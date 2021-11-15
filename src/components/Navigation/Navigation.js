import React from 'react';
import { NavWrapper, NavLink, NavMenu, NavMenuBar } from './styledNavigation';
import { useLocation } from 'react-router-dom';
import menu from '../../images/nav-menu.png';
import menuBlack from '../../images/nav-menu-black.png';

const Navigation = (props) => {

    const [menuImage, setMenuImage] = React.useState(`url(${menu})`);


    const location = useLocation();

    const setMenuLink = () => {
        if (location.pathname === '/saved-news'){
            setMenuImage(`url(${menuBlack})`);
        }
        else setMenuImage(`url(${menu})`);
    }

    React.useEffect(() => {
        setMenuLink();
    }, location.pathname);


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
                <NavMenuBar color={menuImage} />
                <NavMenuBar color={menuImage} />
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