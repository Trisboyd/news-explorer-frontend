import React from 'react';
import Header from '../Header/Header';
import { MainLayout, MainTitle, MainSubtitle, MainInputWrapper, MainInput, MainButton } from './styledMain';

const Main = (props) => {

    const [searchItem, setSearchItem] = React.useState('');

    // ___________________________________________________________________change inputs based on typing
    const handleChange = (event) => {
        setSearchItem(event.target.value);
    };

    const openPopupForm = () => {
        props.openPopupForm();
    }

    const openPopupMenu = () => {
        props.openPopupMenu();
    }

    const signout = () => {
        props.signout();
    }

    const handleSearch = (event) => {
        event.preventDefault();
        props.handleSearch(searchItem);
    }

    return (
        <MainLayout>
            <Header
                loggedIn={props.loggedIn}
                openPopupForm={openPopupForm}
                openPopupMenu={openPopupMenu}
                signout={signout}
                isPopupMenuOpen={props.isPopupMenuOpen}
                color={props.color} />
            <MainTitle>What's going on in the world?</MainTitle>
            <MainSubtitle>Find the latest news on any topic and save them in your personal account.</MainSubtitle>
            <MainInputWrapper>
                <MainInput
                    type='text'
                    name='search'
                    value={searchItem}
                    placeholder='Enter topic'
                    onChange={handleChange} />
                <MainButton
                    color={'#2F71E5'}
                    width={'27%'}
                    mobileWidth={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    top={'0'}
                    right={'0'}
                    textColor={'#FFF'}
                    hoverColor={'#347EFF'}
                    activeColor={'#2A65CC'}
                    onClick={handleSearch}>
                    Search</MainButton>
            </MainInputWrapper>
        </MainLayout>
    )
}

export default Main;