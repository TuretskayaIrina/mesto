/*
Изначально попап не виден (display: none).
Чтобы попап открывался, добавляйте ему модификатор popup_opened
с одним-единственным правилом.
Правило должно изменять значение свойства display на block или flex.
Чтобы закрыть попап, удаляйте у него модификатор popup_opened.

element.addEventListener(eventName, handler);

let element = document.querySelector('.my-element');
*/

const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonCloseEdite = document.querySelector('.popup__edite-close');
const popupButtonCloseAdd = document.querySelector('.popup__add-close');
const profileButtonAdd = document.querySelector('.profile__button-add');
const popup = document.querySelector('.popup');
const popupEdite = document.querySelector('.popup-edite');
const popupAdd = document.querySelector('.popup-add');
const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_profession');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');
let placeInput = document.querySelector('.popup__input_place');
let linlInput = document.querySelector('.popup__input_link');

//открытие - закрытие попапов
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

//открытие попапа - редактирование профиля
function showPopupEdite() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  togglePopup(popupEdite);
}

//сохранить изменения в профиле
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popup);
}

//открытие попапа - добавления карточки
function showPopupAdd() {
  togglePopup(popupAdd);
}


//слушатели для попапа - редактирование профиля
profileButtonEdit.addEventListener('click', showPopupEdite);
popupButtonCloseEdite.addEventListener('click', () => togglePopup(popupEdite));
formElement.addEventListener('submit', formSubmitHandler);

//слушатели для попапа - добавления карточек
profileButtonAdd.addEventListener('click', showPopupAdd);
popupButtonCloseAdd.addEventListener('click', () => togglePopup(popupAdd));
