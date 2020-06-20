// export default class Card {}

class Card {
  constructor(data, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _keyHandler() {

  }

  _overlayHandler() {

  }

  _likeButtonHandler() {

  }

  _deleteButtonHandler() {

  }

  _showPopupPicture() {

  }

  _closePopupPicture() {

  }

  _setEventListeners() {

  }

  generateCard() {
    this._element = document.querySelector(this._cardSelector).content.querySelector('.elements__place').cloneNode(true);

    const placeImg = this._element.querySelector('.elements__img');
    placeImg.src = this._link;
    placeImg.alt = this._name;
    this._element.querySelector('.elements__name').textContent = this._name;

    console.log('working');

    return this._element;
  }
}
