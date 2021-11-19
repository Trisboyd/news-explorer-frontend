import React from 'react';
import { NavWrapper, NavLink, NavMenu, NavMenuBar, NavLogout } from './styledNavigation';
import { useLocation } from 'react-router-dom';
import menu from '../../images/nav-menu.png';
import menuBlack from '../../images/nav-menu-black.png';
import logoutWhite from '../../images/logoutWhite.png';
import logoutBlack from '../../images/logout-black.png';

const Navigation = (props) => {
    
    // ________________________________determine location on web app
    const location = useLocation();

    // _________________________________________logout colors
    const whiteLogout = `url(${logoutWhite})`;

    const blackLogout = `url(${logoutBlack})`;

    // _______________________________________________________________state variable for menu color
    const [menuImage, setMenuImage] = React.useState(`url(${menu})`);

    // ________________________________________function for setting menu color
    const setMenuItems = () => {
        if (location.pathname === '/saved-news') {
            setMenuImage(`url(${menuBlack})`)
        }
        else setMenuImage(`url(${menu})`)
    }

    React.useEffect(() => {
        setMenuItems();
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
                to='/'
                currentPage={location.pathname === '/' && true} >
                Home
            </NavLink>
            {props.loggedIn && <NavLink
                color={props.color}
                to='/saved-news'
                currentPage={location.pathname === '/saved-news' && true}>
                Saved Articles</NavLink>}
            <NavLink
                onClick={openPopupForm}
                color={props.color}
                to='#'>
                {linkText()}
                {props.loggedIn &&
                    <NavLogout
                        image={location.pathname === '/saved-news' ? blackLogout : whiteLogout}
                    />}
            </NavLink>
        </NavWrapper>
    )
}

export default Navigation;