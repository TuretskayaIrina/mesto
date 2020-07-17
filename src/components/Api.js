export default class Api {
  constructor({ baseUrl, headers = {} }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _handleResponse(response){
    if (response.ok) {
      return response.json();
    } else {
      console.log('_handleResponse rejection')
      return Promise.reject(response.statusText)
    }
  }

  _handleResponseError(err){
    console.log('_handleResponseError')
    return Promise.reject(err.message)
  }

  getUserInfo() {
    return fetch(
      `${this.baseUrl}/users/me`,
      {
        headers: this.headers
      }
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError)
      .then((res) => {
        console.log(res);
      })
  }

  getInitialCards() {
    return fetch(
      `${this.baseUrl}/cards`,
      {
        headers: this.headers
      }
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError)
  }

  // setUserInfo(name, about) {
  //   return fetch(
  //     `${this.baseUrl}/users/me`,
  //     {
  //       headers: this.headers,
  //       method: 'PATCH',
  //       body: JSON.stringify(name, about)
  //     }
  //   )
  //     .then(this._handleResponse)
  //     .catch(this._handleResponseError)
  //     .then((res) => {
  //       console.log(res);
  //     })
  // }
}
