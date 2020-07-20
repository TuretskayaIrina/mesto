export default class Api {
  constructor({ baseUrl, headers = {} }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  // проверка ответа сервера
  _handleResponse(response){
    if (response.ok) {
      return response.json();
    } else {
      console.log('Rejection')
      return Promise.reject(response.statusText)
    }
  }

  // обработка ошибки
  _handleResponseError(err){
    console.log('Error')
    return Promise.reject(err.message)
  }

  // получить данные профиля
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

  // отправить данные профиля
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

  // изменить аватарку
  changeAvatar(avatar) {
    return fetch(
      `${this.baseUrl}/users/me/avatar`,
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar.linkInput
        })
      }
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError)
  }


  // получить дефолтные карточки
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

  // отправить карточку на сервер
  setCard(card) {
    return fetch(
      `${this.baseUrl}/cards`,
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          name: card.placeInput,
          link: card.linkInput
        })
      }
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError)
  }

  // отправить лайк
  setLike(id) {
    return fetch(
      `${this.baseUrl}/cards/likes/${id}`,
      {
        method: 'PUT',
        headers: this.headers
      }
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError)
  }

  // удалить лайк
  deleteLike(id) {
    return fetch(
      `${this.baseUrl}/cards/likes/${id}`,
      {
        method: 'DELETE',
        headers: this.headers
      }
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError)
  }

  // удалить карточку
  deleteCard(id) {
    return fetch(
      `${this.baseUrl}/cards/${id}`,
      {
        method: 'DELETE',
        headers: this.headers
      }
    )
      .then(this._handleResponse)
      .catch(this._handleResponseError)
  }
}
