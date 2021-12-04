// ___________________________________________________________Dependencies
import React from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// _________________________________________________________________API classes
import newsApi from '../../utilities/NewsApi';
import mainApi from '../../utilities/MainApi';

// _______________________________________________________________Components
import Main from '../Main/Main';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupMessage from '../PopupMessage/PopupMessage';
import PopupMenu from '../PopupMenu/PopupMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';

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

  // ____________________________________________________________________________________USER INFO

  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    id: ''
  });

  const retrieveUserInfo = () => {
    mainApi.getCurrentUser(token).then(response => {
      if (response) {
        setLoggedIn(true);
        setCurrentUser({
          name: response.user.name,
          email: response.user.email,
          id: response.user._id
        })
      }
      else console.log('Log in error')
    })
      .catch(error => console.log(error));
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

  // _______________________________________________________________________________________Articles

  // _______________________________________________________state variables
  const [articles, setArticles] = React.useState([]);

  const [savedArticles, setSavedArticles] = React.useState([]);

  const [keyword, setkeyword] = React.useState('');

  const [showArticles, setShowArticles] = React.useState(false);

  const [showLoader, setShowLoader] = React.useState(false);

  const [showNone, setShowNone] = React.useState(false);

  // ________________________________________current date
  const curDate = new Date();
  const curDate2 = new Date();

  // ________________________________________format date to be read by newsApi
  const formatDate = (date) => {
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}-${month}-${day}`;
  }

  // ___________________________________________calculate one week from current date
  const weekEarlier = (date) => {
    let pastDate = date.getDate() - 7;
    let oldDate = date;
    oldDate.setDate(pastDate);
    return oldDate
  }

  // _______________________________________________get articles from newsAPi
  const searchArticles = (input) => {
    setShowLoader(true);
    setkeyword(input);
    newsApi.getArticles(
      input,
      formatDate(weekEarlier(curDate)),
      formatDate(curDate2))
      .then(res => {
        if (res.articles.length === 0) {
          setShowNone(true); //__________ show 'no results'
          setShowArticles(false); //_______ remove articles from display
        }
        else {
          setShowNone(false); //_____remove 'no results' component
          setShowArticles(true)
          setArticles([...res.articles]);
          console.log(res.articles.slice(0, 3));
        }
      })
      .catch(error => console.log(error))
      .finally(() => {
        setShowLoader(false);
      });
  }

  // ____________________________________________________save article for saved page
  const saveArticle = (data) => {
    console.log(data);
    mainApi.saveArticle(token, data)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  // ______________________________________________________________API call for removing articles
  const removeArticle = (data) => {
    console.log(currentUser.id, data.owner, data._id)
    if (currentUser.id === data.owner) {
      mainApi.removeArticle(token, data._id)
        .then(response => {
          setSavedArticles(savedArticles.filter((articleItem) => articleItem._id !== data._id))
          console.log(response)
        })
        .catch(error => console.log(error))
    }
    else console.log('Only article owners may remove their own articles')
  }

  // ________________________________________________________________________render saved articles
  //  _________________________________________filter articles before rendering
  const filterArticles = (old, recent) => {
    const ids = old.map((article) => article._id)
    return recent.filter((article) => ids.indexOf(article._id) === -1)
  }

  const getSavedArticles = () => {
    mainApi.getArticles(token)
      .then(response => {
        setSavedArticles([...savedArticles, ...filterArticles(savedArticles, response.articles)]);
      })
      .catch(error => console.log(error));
  }

  // _______________________________________________________________________________reload saved articles on actions
  React.useEffect(() => {
    getSavedArticles(); // ____________ get saved articles
  }, [location]);

  React.useEffect(() => {
    retrieveUserInfo(); //_________________ get user info
  }, [handleLogin, signout]);

  // ________________________________________________________________________________________________COMPONENTS

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
              <Main
                loggedIn={loggedIn}
                openPopupForm={openPopupForm}
                openPopupMenu={openPopupMenu}
                isPopupMenuOpen={isPopupMenuOpen}
                color={'#FFF'} //___color of header based on route
                signout={signout}
                handleSearch={searchArticles}
              />
              {showLoader &&
                <Preloader />}
              {showArticles &&
                <NewsCardList
                  loggedIn={loggedIn}
                  keyword={keyword}
                  savedNews={savedNews}
                  articles={articles}
                  resultsNumber={resultsNumber}
                  showAllResults={showAllResults}
                  resetResults={resetResults}
                  saveArticle={saveArticle} />}
              {showNone &&
                <NoResults />}
              <About />
          </ Route>
          <ProtectedRoute
            loggedIn={loggedIn}
            path='/saved-news'
            component={<>
              <SavedNewsHeader
                color={'#1A1B22'} //___color of header based on route
                savedArticles={savedArticles}
                saveArticle={saveArticle}
                removeArticle={removeArticle}
                openPopupForm={openPopupForm}
                openPopupMenu={openPopupMenu}
                isPopupMenuOpen={isPopupMenuOpen}
                loggedIn={loggedIn}
                signout={signout}
              />
              <SavedNews
                savedArticles={savedArticles}
                savedNews={savedNews}
                removeArticle={removeArticle} />
            </>}>
          </ ProtectedRoute>
        </Switch>
        <Footer />
        <PopupWithForm
          isOpen={isPopupFormOpen}
          closePopup={closeAllPopups}
          handleLogin={handleLogin}
          handleRegister={handleRegister} />
        <PopupMessage
          isOpen={isPopupMessageOpen}
          closePopup={closeAllPopups}
          openPopupForm={openPopupForm} />
        <PopupMenu
          popupMenuOpen={isPopupMenuOpen}
          closePopupMenu={closeAllPopups}
          openPopupForm={openPopupForm} />
      </CurrentUserContext.Provider>
  );
}

export default App;
