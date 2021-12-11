class MainApi {

  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  // _______________________________________________________________________Register
  register = ({ email, password, name }) => {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    })
      .then((response) => {
        return this._checkResponse(response);
      })
      .then((res) => {
        return res;
      })
  };

  // ______________________________________________________________________Login
  signin = ({ email, password }) => {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        return this._checkResponse(response)
      })
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem('token', data.token);
          return data;
        }
      })
  }

  // _____________________________________________________Get user info
  getCurrentUser = (token) => {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        return this._checkResponse(response);
      })
  }

  // ________________________________________________collect articles
  getArticles = (token) => {
    return fetch(`${this._url}/articles`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      return this._checkResponse(response);
    })
  }

  // ___________________________________________________remove article
  removeArticle = (token, articleId) => {
    return fetch(`${this._url}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(response => this._checkResponse(response));
  }

  // _____________________________________________________save article
  saveArticle = (token, data) => {
    return fetch(`${this._url}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        keyword: data.keyword,
        title: data.title,
        text: data.text,
        date: data.date,
        source: data.source,
        link: data.link,
        image: data.image
       })
    })
    .then(response => this._checkResponse(response));
  }


  // ____________________________________________________Check if response is valid
  _checkResponse = (response) => {
    if (response.ok) {
      return response.json();
    }
    else {
      return Promise.reject(`Error: ${response.status}`)
    }
  }

}

const mainApi = new MainApi({
  // baseUrl: 'http://localhost:3000'
  baseUrl: 'https://api-boyd-news-explorer.herokuapp.com'
})

export default mainApi;