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

  // получить дефолтные карточки
  getUserInfo() {
    return fetch(
      `${this.baseUrl}/users/me`,
      {
        headers: this.headers
      }
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError)
  }

  //получить данные профиля
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

  //отправить данные профиля
  setUserInfo(profile) {
    return fetch(
      `${this.baseUrl}/users/me`,
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          name: profile.nameInput,
          about: profile.jobInput
        })
      }
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError)
  }
}
