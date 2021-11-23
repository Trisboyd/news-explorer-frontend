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
          .catch(error => console.log(error));
      }
    
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
    baseUrl: 'http://localhost:3000'
    //baseUrl: 'https://api.boydaround.students.nomoreparties.site'
})

export default mainApi;