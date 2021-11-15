class NewsApi {
    constructor({ baseUrl }) {
        this._url = baseUrl;
    }

    getArticles(key, keyword) {
        return fetch(`${this.url}/`)
    }

}

        // retrieve the profile info saved in the server
        getProfile(token) {
            return fetch(`${this._url}/users/me`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then((res) => {
                    return this._checkResponse(res)
                });
        }