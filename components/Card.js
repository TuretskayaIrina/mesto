const popupPicture = document.querySelector('.popup-picture');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

export default class Card {
  constructor(data, cardSelector, { handleCardClick }){
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    // console.log(handleCardClick);
  }

  // закрыть на Escape
  _keyHandler(evt) {
    if (evt.key === 'Escape') {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
    }
  }

  // закрыть на overlay
  _overlayHandler(evt) {
    if (evt.target.classList.contains('popup')) {
      evt.target.classList.remove('popup_opened')
    }
  }

  // поставить like
  _likeButtonHandler() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  // удалить карточку
  _deleteButtonHandler() {
    this._element.remove();
  }

  // // открыть PopupPicture
  // _showPopupPicture() {
  //   popupImage.src = this._link;
  //   popupImage.alt = this._name;
  //   popupCaption.textContent = this._name;

  //   popupPicture.classList.add('popup_opened');
  //   document.addEventListener('keydown', this._keyHandler);
  //   popupPicture.addEventListener('click', this._overlayHandler);
  // }

  // // закрыть PopupPicture
  // _closePopupPicture() {
  //   popupPicture.classList.remove('popup_opened');
  //   document.removeEventListener('keydown', this._keyHandler);
  // }

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
      this._handleCardClick(this._name, this._link);
      // console.log(this._name);
      // console.log(this._link);
    });

    // //открыть в полном размере
    // this._element.querySelector('.elements__img').addEventListener('click',() => {
    //   this._showPopupPicture();
    // });
    // //закрыть
    // document.querySelector('.popup__picture-close').addEventListener('click',() => {
    //   this._closePopupPicture();
    // });
  }

  // сгенерировать карточку
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

