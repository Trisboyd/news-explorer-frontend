import React from 'react';
import Main from './components/Main/Main';
import SavedNewsHeader from './components/SavedNewsHeader/SavedNewsHeader';
import About from '../src/components/About/About';
import NewsCardList from './components/NewsCardList/NewsCardList';
import Footer from './components/Footer/Footer';
import PopupWithForm from './components/PopupWithForm/PopupWithForm';
import PopupMessage from './components/PopupMessage/PopupMessage';
import articles from './utilities/articles';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [isPopupFormOpen, setIsPopupFormOpen] = React.useState(false);

  const [isPopupMessageOpen, setIsPopupMessageOpen] = React.useState(false);

  const [resultsNumber, setResultsNumber] = React.useState(3);

  const showAllResults = () => {
    setResultsNumber();
  }

  const resetResults = () => {
    setResultsNumber(3);
  }

  const openPopupForm = () => {
    setIsPopupFormOpen(true);
  }

  const closeAllPopups = () => {
    setIsPopupFormOpen(false);
    setIsPopupMessageOpen(false);
  }

  return (
    <>
      <Main
        loggedIn={loggedIn}
        openPopup={openPopupForm} />
        <SavedNewsHeader />
      <NewsCardList
        loggedIn={loggedIn}
        articles={articles}
        resultsNumber={resultsNumber}
        showAllResults={showAllResults}
        resetResults={resetResults} />
      <About />
      <Footer />
      <PopupWithForm
        isOpen={isPopupFormOpen}
        closePopup={closeAllPopups}
      />
      <PopupMessage
        isOpen={isPopupMessageOpen}
        closePopup={closeAllPopups} />
    </>
  );
}

export default App;
