import {initialCards} from "./initialСards.js"
import Card from "./Card.js"
import FormValidator from "./FormValidator.js"
import Section from "./Section.js"
import UserInfo from './UserInfo.js';


const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonCloseEdit = document.querySelector('.popup__edite-close');
const popupButtonCloseAdd = document.querySelector('.popup__add-close');
const buttonAdd = document.querySelector('.profile__button-add');
const popupEdite = document.querySelector('.popup-edite');
const popupAdd = document.querySelector('.popup-add');
const formCreateCard = popupAdd.querySelector('form');

const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_profession');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');

const cardContainer = document.querySelector('.elements');

const formPopupEdit = popupEdite.querySelector('form');
const formPopupAdd = popupAdd.querySelector('form');


// объект настроек с селекторами и классами формы
const formValidationOptions = {
  inputSelector: '.popup__input',//все инпуты
  submitButtonSelector: '.popup__button-save',//все кнопки сабмит
  inactiveButtonClass: 'popup__button-save_inactive',//стили для неактивных сабмитов (серая кнопка)
  inputErrorClass: 'popup__input_type-error',//стили для инпута во время ошибки
  errorClass: 'popup__input-error_visible',// стили для спана во время ошибки
  errorSpans: '.popup__input-error'// спаны
}

const validationPopupEdit = new FormValidator(formPopupEdit, formValidationOptions);
validationPopupEdit.enableValidation();

const validationPopupAdd = new FormValidator(formPopupAdd, formValidationOptions);
validationPopupAdd.enableValidation();

//обработчик закрытия на escape
function keyHandler(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    if (popupOpened) {
    closePopup(popupOpened);
    }
  }
}

//обработчик закрытия на оверлей
function overlayHandler(evt) {
  if (evt.target.classList.contains('popup')) {
    evt.target.classList.remove('popup_opened')
  }
}

//открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
}

//закрытие попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}


//открытие попапа - редактирование профиля
function showPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validationPopupEdit.resetFormaValidation();
  openPopup(popupEdite);
}

//сохранить изменения в профиле
function popupEditSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdite);
}

// отобразить дефолтные карточки
function renderInitialCards(item) {
  const card = new Card(item, '.elements-template');
  defoltCards.addItem(card.generateCard());
  // console.log(defoltCards);

  // initialCards.forEach((item) => {
  //   const card = new Card(item, '.elements-template');
  //   cardContainer.prepend(card.generateCard());
  // });
}

// renderInitialCards();

const defoltCards = new Section({
  items: initialCards,
  renderer: ((item) => {
    renderInitialCards(item);
    // console.log('working');
  })
}, '.elements');

// console.log(defoltCards);

defoltCards.renderItems();

//открытие попапа - добавления карточки
function showPopupAdd() {
  formCreateCard.reset();
  validationPopupAdd.resetFormaValidation();
  openPopup(popupAdd);
}

//добавление новых карточек
function popupAddSubmitHandler (evt) {
  evt.preventDefault();
  closePopup(popupAdd);
  const newCard = {};
  newCard.name = placeInput.value;
  newCard.link = linkInput.value;
  const card = new Card(newCard, '.elements-template');
  cardContainer.prepend(card.generateCard());
  formCreateCard.reset();
}

//слушатели для попапа - редактирование профиля
profileButtonEdit.addEventListener('click', showPopupEdit);
popupButtonCloseEdit.addEventListener('click', () => closePopup(popupEdite));
popupEdite.addEventListener('submit', popupEditSubmitHandler);

//слушатели для попапа - добавления карточек
buttonAdd.addEventListener('click', showPopupAdd);
popupButtonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
popupAdd.addEventListener('submit', popupAddSubmitHandler);

//слушатели для закрытия на оверлей
popupEdite.addEventListener('click', overlayHandler);
popupAdd.addEventListener('click', overlayHandler);
