// ___________________________________________________________Dependencies
import React from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { CurrentUserContext } from './contexts/CurrentUserContext';

// _________________________________________________________________API classes
import newsApi from './utilities/NewsApi';
import mainApi from './utilities/MainApi';

// _______________________________________________________________Components
import Main from './components/Main/Main';
import SavedNewsHeader from './components/SavedNewsHeader/SavedNewsHeader';
import SavedNews from './components/SavedNews/SavedNews';
import About from '../src/components/About/About';
import NewsCardList from './components/NewsCardList/NewsCardList';
import Footer from './components/Footer/Footer';
import PopupWithForm from './components/PopupWithForm/PopupWithForm';
import PopupMessage from './components/PopupMessage/PopupMessage';
import PopupMenu from './components/PopupMenu/PopupMenu';
// import Preloader from './components/Preloader/Preloader';
// import NoResults from './components/NoResults/NoResults';

// _______________________________________________constants
// import articles from './utilities/articles';

function App() {

  // ________________________________________________________________________________________POPUPS
  const [isPopupFormOpen, setIsPopupFormOpen] = React.useState(false);

  const [isPopupMessageOpen, setIsPopupMessageOpen] = React.useState(false);

  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);

  const [resultsNumber, setResultsNumber] = React.useState(3);

  const [savedNews, setSavedNews] = React.useState(false);

  const location = useLocation();

  const showSavedNews = () => {
    if (location.pathname === '/saved-news') {
      setSavedNews(true);
    }
    else setSavedNews(false);
  }

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

  const openPopupMenu = () => {
    setIsPopupMenuOpen(true);
  }

  const closeAllPopups = () => {
    setIsPopupFormOpen(false);
    setIsPopupMessageOpen(false);
    setIsPopupMenuOpen(false);
  }

  React.useEffect(() => {
    showSavedNews();
  }, [location]);

  // ______________________________________________________________________________Articles

  const [articles, setArticles] = React.useState([]);

  const curDate = new Date();
  const curDate2 = new Date();

  const formatDate = (date) => {
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    return `${year}-${month}-${day}`;
  }

  const weekEarlier = (date) => {
    let pastDate = date.getDate() - 7;
    let oldDate = date;
    oldDate.setDate(pastDate);
    return oldDate
  }

  const displayArticles = () => {
    newsApi.getArticles('nature', formatDate(weekEarlier(curDate)), formatDate(curDate2))
      .then(res => {
        setArticles([...articles, ...res.articles]);
      })
      .catch(error => { console.log(error) });
  }

  // _________________________________________________________________________________________Authorization

  // _______________________________________________state variables for loggedin and registration 
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [isRegistered, setIsRegistered] = React.useState(false);

  // ____________________________________________token variable
  const token = localStorage.getItem('token');

  // ________________________________________history hook from react router
  const history = useHistory();

  // ____________________________________________registration function
  const handleRegister = (inputs) => {
    mainApi.register(inputs)
    .then((response) => {
      if (response) {
        console.log(response);
        setIsRegistered(true);
        setIsPopupMessageOpen(true);
      }
    })
    .catch(error => {
      console.log(error);
      setIsRegistered(false);
    })
  }

  // _________________________________________login function
  const handleLogin = (inputs) => {
    mainApi.signin(inputs)
    .then(response => {
      if (!response) {
        return;
      }
      if (response.token) {
        setLoggedIn(true);
        retrieveUserInfo();
      }
    })
    .catch(error => console.log(error));
  }

  // __________________________________________logout
  const signout = () => {
    history.push('/');
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  // ____________________________________________________________________________________USER INFO

  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    id: ''
  });

  const retrieveUserInfo = () => {
    mainApi.getCurrentUser().then(response => {
      setCurrentUser({
        name: response.name,
        email: response.email,
        id: response._id
      })
    })
  }

  React.useEffect(() => {
    retrieveUserInfo();
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main
              loggedIn={loggedIn}
              openPopupForm={openPopupForm}
              openPopupMenu={openPopupMenu}
              isPopupMenuOpen={isPopupMenuOpen}
              color={'#FFF'} //___color of header based on route
            />
            <NewsCardList
              //search={search} this will be a state variable for determining whether or not to show results
              //based on whether a search has been initiated
              savedNews={savedNews}
              articles={articles}
              resultsNumber={resultsNumber}
              showAllResults={showAllResults}
              resetResults={resetResults} />
            <About />
          </ Route>
          <Route path='/saved-news'>
            <SavedNewsHeader
              color={'#1A1B22'} //___color of header based on route
              openPopupForm={openPopupForm}
              openPopupMenu={openPopupMenu}
              isPopupMenuOpen={isPopupMenuOpen}
              loggedIn={loggedIn}
            />
            <SavedNews
              articles={articles}
              savedNews={savedNews} />
          </ Route>
        </Switch>
        {/* <Preloader /> */}
        {/* <NoResults /> */}
        <Footer />
        <PopupWithForm
          isOpen={isPopupFormOpen}
          closePopup={closeAllPopups} />
        <PopupMessage
          isOpen={isPopupMessageOpen}
          closePopup={closeAllPopups}
          openPopupForm={openPopupForm} />
        <PopupMenu
          popupMenuOpen={isPopupMenuOpen}
          closePopupMenu={closeAllPopups}
          openPopupForm={openPopupForm} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
