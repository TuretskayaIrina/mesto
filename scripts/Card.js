const popupPicture = document.querySelector('.popup-picture');

export default class Card {
  constructor(data, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _keyHandler(evt) {
    if (evt.key === 'Escape') {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
    }
  }

  _overlayHandler(evt) {
    if (evt.target.classList.contains('popup')) {
      evt.target.classList.remove('popup_opened')
    }
  }

  _likeButtonHandler() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _deleteButtonHandler() {
    this._element.remove();
  }

  _showPopupPicture() {
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;

    popupPicture.classList.add('popup_opened');
    document.addEventListener('keydown', this._keyHandler);
    popupPicture.addEventListener('click', this._overlayHandler);
  }

  _closePopupPicture() {
    popupPicture.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._keyHandler);
  }

  _setEventListeners() {
    // поставить лайк
    this._element.querySelector('.elements__like').addEventListener('click',() => {
      this._likeButtonHandler();
    });
    //удалить
    this._element.querySelector('.elements__delete').addEventListener('click',() => {
      this._deleteButtonHandler();
    });
    //открыть в полном размере
    this._element.querySelector('.elements__img').addEventListener('click',() => {
      this._showPopupPicture();
    });
    //закрыть
    document.querySelector('.popup__picture-close').addEventListener('click',() => {
      this._closePopupPicture();
    });
  }

  generateCard() {
    this._element = document.querySelector(this._cardSelector).content.querySelector('.elements__place').cloneNode(true);

    const placeImg = this._element.querySelector('.elements__img');
    placeImg.src = this._link;
    placeImg.alt = this._name;
    this._element.querySelector('.elements__name').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}

