// ___________________________________________________________Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// _______________________________________________________________Components
import Main from './components/Main/Main';
import SavedNewsHeader from './components/SavedNewsHeader/SavedNewsHeader';
import About from '../src/components/About/About';
import NewsCardList from './components/NewsCardList/NewsCardList';
import Footer from './components/Footer/Footer';
import PopupWithForm from './components/PopupWithForm/PopupWithForm';
import PopupMessage from './components/PopupMessage/PopupMessage';

// _______________________________________________constants
import articles from './utilities/articles';



function App() {

  // _______________________________________________________________state variables
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [isPopupFormOpen, setIsPopupFormOpen] = React.useState(false);

  const [isPopupMessageOpen, setIsPopupMessageOpen] = React.useState(false);

  const [resultsNumber, setResultsNumber] = React.useState(3);

  // _______________________________________shifts # results shown from article search
  const showAllResults = () => {
    setResultsNumber();
  }

  const resetResults = () => {
    setResultsNumber(3);
  }

  // _______________________________________________________popup functions
  const openPopupForm = () => {
    setIsPopupFormOpen(true);
  }

  const closeAllPopups = () => {
    setIsPopupFormOpen(false);
    setIsPopupMessageOpen(false);
  }

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Main
            loggedIn={loggedIn}
            openPopup={openPopupForm}
            color={'#FFF'} //___color of header based on route
          />
        </ Route>
        <Route path='/saved-news'>
          <SavedNewsHeader
            color={'#1A1B22'} //___color of header based on route
          />
        </ Route>
      </Switch>
      <NewsCardList
        //search={search} this will be a state variable for determining whether or not to show results
        //based on whether a search has been initiated
        loggedIn={loggedIn}
        articles={articles}
        resultsNumber={resultsNumber}
        showAllResults={showAllResults}
        resetResults={resetResults} />
      <About />
      <Footer />
      <PopupWithForm
        isOpen={isPopupFormOpen}
        closePopup={closeAllPopups} />
      <PopupMessage
        isOpen={isPopupMessageOpen}
        closePopup={closeAllPopups} />
    </>
  );
}

export default App;
