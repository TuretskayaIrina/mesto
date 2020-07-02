export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  _handleEscClose = (evt) => {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
      if (popupOpened) {
        this.close();
      }
    }
  }

  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  open() {
    // this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('click', this._handleOverlayClose);

    console.log('open working');
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._handleOverlayClose);

    console.log('close working');
  }

  setEventListeners() {
    this._popupSelector.querySelector('.popup__button-close').addEventListener('click', () => {
      this.close();
    });
  }
}


// //обработчик закрытия на escape
// function keyHandler(evt) {
//   const popupOpened = document.querySelector('.popup_opened');
//   if (evt.key === 'Escape') {
//     if (popupOpened) {
//     closePopup(popupOpened);
//     }
//   }
// }
//
// //обработчик закрытия на оверлей
// function overlayHandler(evt) {
//   if (evt.target.classList.contains('popup')) {
//     evt.target.classList.remove('popup_opened')
//   }
// }
//
// //открытие попапов
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', keyHandler);
// }
//
// //закрытие попапов
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', keyHandler);
// }
