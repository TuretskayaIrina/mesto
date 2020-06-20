import {initialCards} from "./initialСards.js"
import  Card from "./Card.js"
// import  FormValidator from "./FormValidator.js"


const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonCloseEdit = document.querySelector('.popup__edite-close');
const popupButtonCloseAdd = document.querySelector('.popup__add-close');
//const popupButtonClosePicture = document.querySelector('.popup__picture-close');
const buttonAdd = document.querySelector('.profile__button-add');
const popupEdite = document.querySelector('.popup-edite');
const popupAdd = document.querySelector('.popup-add');
//const popupPicture = document.querySelector('.popup-picture');
const formCreateCard = popupAdd.querySelector('form');

const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_profession');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');

//const popupImage = document.querySelector('.popup__image');
//const popupCaption = document.querySelector('.popup__caption');

const cardContainer = document.querySelector('.elements');
//const cardTemplate = document.querySelector('.elements-template');

const formPopupEdit = popupEdite.querySelector('form');
const submitPopupEdit = popupEdite.querySelector('.popup__button-save');

const formPopupAdd = popupAdd.querySelector('form');
const submitPopupAdd = popupAdd.querySelector('.popup__button-save');


// все настройки передаются при вызове
const formValidationOptions = {
   formSelector: '.popup__form',//все формы
   inputSelector: '.popup__input',//все инпуты
   submitButtonSelector: '.popup__button-save',//все кнопки сабмит
   inactiveButtonClass: 'popup__button-save_inactive',//стили для неактивных сабмитов (серая кнопка)
   inputErrorClass: 'popup__input_type-error',//стили для инпута во время ошибки
   errorClass: 'popup__input-error_visible'// стили для спана во время ошибки
}

enableValidation(formValidationOptions);

//обработчик закрытия на escape
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
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
  handleFormInput(formPopupEdit, submitPopupEdit, formValidationOptions.inactiveButtonClass);
  hideInputError (formPopupEdit, jobInput, formValidationOptions);
  hideInputError (formPopupEdit, nameInput, formValidationOptions);
  openPopup(popupEdite);
}

//сохранить изменения в профиле
function popupEditSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdite);
}

// //функция для лайков
// function toggleLikeActive(evt) {
//   evt.target.classList.toggle("elements__like_active");
// }

// // удаление карточки и слушателей
// function deleteClickHandler(evt) {
//   const cardElement = evt.target.closest('.elements__place');
//   evt.target.removeEventListener('click', deleteClickHandler);
//   cardElement.remove();
// }

//открытие попапа - просмотр изображения
// function showPopupPicture(evt) {
//   popupImage.src = evt.target.src;
//   popupImage.alt = evt.target.alt;
//   popupCaption.textContent = evt.target.alt;
//   openPopup(popupPicture);
// }

//шаблон создания карточек
// function createCard (name, link){
//   //клонировали шаблон
//   const cardElement = cardTemplate.content.cloneNode(true);
//   //добавили лайк
//   const buttonLike  = cardElement.querySelector('.elements__like');
//   //добавили удаление
//   const buttonDelete = cardElement.querySelector('.elements__delete');
//   //добавили картинку
//   const placeImg = cardElement.querySelector('.elements__img');
//   placeImg.src = link;
//   placeImg.alt = name;
//   //название места
//   const placeName = cardElement.querySelector('.elements__name');
//   placeName.textContent = name;
//   // поставить лайк
//   buttonLike.addEventListener('click', toggleLikeActive);
//   //удалить
//   buttonDelete.addEventListener('click', deleteClickHandler);
//   //открыть в полном размере

//   placeImg.addEventListener('click', showPopupPicture);


//   return cardElement;
// }

//функция добавления карточек
function addCardToContainer(card){
  cardContainer.prepend(card);
}

// отобразить дефолтные карточки
function renderInitialCards() {
  initialCards.forEach((item) => {
    const card = new Card(item, '.elements-template');
    cardContainer.prepend(card.generateCard());

    //console.log('working');
  });
}

renderInitialCards();

//открытие попапа - добавления карточки
function showPopupAdd() {
  formCreateCard.reset();
  handleFormInput(formPopupAdd, submitPopupAdd, formValidationOptions.inactiveButtonClass);
  hideInputError (formPopupAdd, linkInput, formValidationOptions);
  hideInputError (formPopupAdd, placeInput, formValidationOptions);
  openPopup(popupAdd);
}

//добавление новых карточек
function popupAddSubmitHandler (evt) {
  evt.preventDefault();
  closePopup(popupAdd);
  addCardToContainer(createCard (placeInput.value, linkInput.value));
  formCreateCard.reset();
}

//слушатели для попапа - просмотр изображения
//popupButtonClosePicture.addEventListener('click', () => closePopup(popupPicture));

//слушатели для попапа - редактирование профиля
profileButtonEdit.addEventListener('click', showPopupEdit);
popupButtonCloseEdit.addEventListener('click', () => closePopup(popupEdite));
popupEdite.addEventListener('submit', popupEditSubmitHandler);

//слушатели для попапа - добавления карточек
buttonAdd.addEventListener('click', showPopupAdd);
popupButtonCloseAdd.addEventListener('click', () => closePopup(popupAdd));
popupAdd.addEventListener('submit', popupAddSubmitHandler);

//слушатели для закрытия на оверлей
//popupPicture.addEventListener('click', overlayHandler);
popupEdite.addEventListener('click', overlayHandler);
popupAdd.addEventListener('click', overlayHandler);
