const popupPicture = document.querySelector('.popup-picture');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

export default class Card {
  constructor(data, cardSelector, { handleCardClick }){
    this._data = data;
    this._cardSelector = cardSelector;
    // this._api = api;
    this._handleCardClick = handleCardClick;
  }

  // поставить like
  _likeButtonHandler() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  // удалить карточку
  _deleteButtonHandler() {
    this._element.remove();
  }

  //слушатели
  _setEventListeners() {
    // поставить лайк
    this._element.querySelector('.elements__like').addEventListener('click',() => {
      this._likeButtonHandler();
    });
    //удалить
    this._element.querySelector('.elements__delete').addEventListener('click',() => {
      this._deleteButtonHandler();
    });

    //Эта функция должна открывать попап с картинкой при клике на карточку.
    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._handleCardClick(this._data.name, this._data.link);
    });
  }

  // сгенерировать карточку
  generateCard() {
    this._element = document.querySelector(this._cardSelector).content.querySelector('.elements__place').cloneNode(true);

    const placeImg = this._element.querySelector('.elements__img');
    placeImg.src = this._data.link;
    placeImg.alt = this._data.name;
    this._element.querySelector('.elements__name').textContent = this._data.name;

    this._setEventListeners();

    return this._element;

  }
}

