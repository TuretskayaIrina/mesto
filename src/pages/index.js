import "./index.css"
import {initialCards} from "../utils/initialСards.js"
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithDelite from "../components/PopupWithDelite.js"
import PopupAvatar from "../components/PopupAvatar.js"
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

import {
  popupEdite,
  popupAdd,
  popupPicture,
  popupDelite,
  formCreateCard,
  formPopupEdit,
  formPopupAdd,
  profileButtonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  profileName,
  profileAbout,
  profileAvatar,
  formValidationOptions
} from "../utils/constants.js"

const validationPopupEdit = new FormValidator(formPopupEdit, formValidationOptions);

validationPopupEdit.enableValidation();

const validationPopupAdd = new FormValidator(formPopupAdd, formValidationOptions);

validationPopupAdd.enableValidation();

const popupWithImage = new PopupWithImage(popupPicture);

popupWithImage.setEventListeners();

// тут еще валидацию прикрутить нужно
const popupWithDelite = new PopupWithDelite(popupDelite);
popupWithDelite.deleteButtonHandler();

// тут еще валидацию прикрутить нужно
// const popupAvatar = new PopupAvatar();

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
  headers: {
    authorization: '9420ae04-aee0-4c02-9434-ecee21317d2d',
    'Content-Type': 'application/json'
  }
}

const api = new Api(config);

// получить карточки с сервера
const defoltCards = new Section({
  renderer: (item) => {
    const card = new Card(api, item, '.elements-template', {
      handleCardClick: () => {
        popupWithImage.open(item.name, item.link);
      }
    });
    defoltCards.addItem(card.generateCard());
  }
}, '.elements');

// отрендерить карточки
api.getInitialCards()
  .then((res) => {
    defoltCards.renderItems(res);
    console.log(res);
  });

// отправить новую карточку на сервер
const addPopup = new PopupWithForm(popupAdd, {
  handleFormSubmit: (item) => {
    const inputValue = addPopup.getInputValues();
    api.setCard(inputValue)
      .then((data) => {
        const card = new Card(api, data, '.elements-template', {
          handleCardClick: () => {
            popupWithImage.open(item.name, item.link);
          }
        });
        defoltCards.addItem(card.generateCard());
      })
  }
});

addPopup.setEventListeners();

// конструктор пользователя
const userInfo = new UserInfo({
  name: profileName,
  about: profileAbout,
  avatar: profileAvatar
})

// получили данные о пользоателе с сервера
api.getUserInfo()
  .then((res) => {
    userInfo.setUserInfo(res);
  });

// отправить изменения профиля на сервер
const editePopup = new PopupWithForm(popupEdite, {
  handleFormSubmit: () => {
    const inputValue = editePopup.getInputValues();
    api.setUserInfo(inputValue)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
  }
})

editePopup.setEventListeners();

profileButtonEdit.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.about;
  validationPopupEdit.resetFormaValidation();
  editePopup.open();
})

buttonAdd.addEventListener('click', () => {
  formCreateCard.reset();
  validationPopupAdd.resetFormaValidation();
  addPopup.open();
})
