import React from 'react';
import { NavWrapper, NavLink, NavMenu, NavMenuBar, NavLogout } from './styledNavigation';
import { useLocation } from 'react-router-dom';
import menu from '../../images/nav-menu.png';
import menuBlack from '../../images/nav-menu-black.png';
import logoutWhite from '../../images/logoutWhite.png';
import logoutBlack from '../../images/logoutBlack.png';

const Navigation = (props) => {

    const [menuImage, setMenuImage] = React.useState(`url(${menu})`);
    const [logoutImage, setLogoutImage] = React.useState(`url(${logoutWhite})`)


    const location = useLocation();

    const setMenuItems = () => {
        if (location.pathname === '/saved-news') {
            setMenuImage(`url(${menuBlack})`)
            setLogoutImage(`url(${logoutBlack})`)
        }
        else setMenuImage(`url(${menu})`)
             setLogoutImage(`url(${logoutWhite})`);
    }

    React.useEffect(() => {
        setMenuItems();
        console.log(logoutImage);
    }, [location.pathname]);


    const linkText = () => {
        if (props.loggedIn) {
            return `Elise`
            //should be props.userName or userName with context
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
                color={props.color}
                to='/'>
                Home
            </NavLink>
            {props.loggedIn ? <NavLink
                color={props.color}
                to='/saved-news'>
                Saved Articles</NavLink> : ''}
            <NavLink
                onClick={openPopupForm}
                color={props.color}
                to='#'>
                {linkText()}
                {props.loggedIn ? <NavLogout image={logoutImage} /> : ''}
            </NavLink>
        </NavWrapper>
    )
}

export default Navigation;