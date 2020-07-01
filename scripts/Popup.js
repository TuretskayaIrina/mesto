class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose() {

  }

  open() {

  }

  close() {

  }

  setEventListeners() {

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
