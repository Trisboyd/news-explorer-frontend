class NewsApi {
    constructor({ baseUrl, apiKey }) {
        this._url = baseUrl;
        this._key = apiKey;

    }

    getArticles(q, from, to) {
        return fetch(`${this._url}qInTitle=${q}&from=${from}&to=${to}&pageSize=100&apiKey=${this._key}`, {
            headers: {
                // "Content-Type": "application/json"
            }
        })
            .then((res) => {
                return this._checkResponse(res)
            });
    }

    // Check if response is valid
    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        else {
            return Promise.reject(`Error: ${res.status}`)
        }
    }

}


const newsApi = new NewsApi({
    baseUrl: "https://nomoreparties.co/news/v2/everything?",
    apiKey: "496286d2299947289df49c01001af364",
})

export default newsApi;