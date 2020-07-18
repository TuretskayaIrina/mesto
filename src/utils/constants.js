export const popupEdite = document.querySelector('.popup-edite');
export const popupAdd = document.querySelector('.popup-add');
export const popupPicture = document.querySelector('.popup-picture');
export const popupDelite = document.querySelector('.popup-delite');

export const formCreateCard = popupAdd.querySelector('form');
export const formPopupEdit = popupEdite.querySelector('form');
export const formPopupAdd = popupAdd.querySelector('form');

export const profileButtonEdit = document.querySelector('.profile__button-edit');
export const buttonAdd = document.querySelector('.profile__button-add');

export const nameInput = document.querySelector('.popup__input_name');
export const jobInput = document.querySelector('.popup__input_profession');

export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__profession');
export const profileAvatar = document.querySelector('.profile__img');

// объект настроек с селекторами и классами формы
export const formValidationOptions = {
  inputSelector: '.popup__input',//все инпуты
  submitButtonSelector: '.popup__button-save',//все кнопки сабмит
  inactiveButtonClass: 'popup__button-save_inactive',//стили для неактивных сабмитов (серая кнопка)
  inputErrorClass: 'popup__input_type-error',//стили для инпута во время ошибки
  errorClass: 'popup__input-error_visible',// стили для спана во время ошибки
  errorSpans: '.popup__input-error'// спаны
}
