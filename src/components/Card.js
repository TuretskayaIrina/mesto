const popupPicture = document.querySelector('.popup-picture');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

export default class Card {
  constructor(api, data, cardSelector, { handleCardClick }){
    this._api = api;
    this._data = data;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  // показать счетчик лайков
  _showLikeCounter() {
    const like = this._element.querySelector('.elements__like');
    const likeCounter = this._element.querySelector('.elements__like-counter');

    if (!like.classList.contains('elements__like_active')) {
      this._api.setLike(this._id)
        .then((data) => {
          like.classList.add('elements__like_active');
          likeCounter.textContent = `${data.likes.length}`;

        })
    } else {
      this._api.deleteLike(this._id)
        .then((data) => {
          like.classList.remove('elements__like_active');
          likeCounter.textContent = `${data.likes.length}`;
        })
    }
  }

  // удалить карточку
  _deleteButtonHandler() {
    this._element.remove();
  }

  //слушатели
  _setEventListeners() {
    // поставить лайк
    this._element.querySelector('.elements__like').addEventListener('click',() => {
      this._showLikeCounter();
    });

    // удалить карточку
    this._element.querySelector('.elements__delete').addEventListener('click',() => {
      this._deleteButtonHandler();
    });

    // открыть картинку в полном размере
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
    this._element.id = this._id;
    this._element.querySelector('.elements__like-counter').textContent = `${this._data.likes.length}`;
    if (this._data.likes.find((like) => like._id === "a5b819b34cd334f4803b5b5c")) {
      this._element.querySelector('.elements__like').classList.add('elements__like_active');
    }

    this._setEventListeners();

    return this._element;
  }
}

