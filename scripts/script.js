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
const popupButtonClose = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_profession');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');


function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}
function showPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  togglePopup(popup);
}


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  togglePopup(popup);
}

profileButtonEdit.addEventListener('click', showPopup);
popupButtonClose.addEventListener('click', () => togglePopup(popup));
formElement.addEventListener('submit', formSubmitHandler);
