import "./index.css"
import {initialCards} from "../utils/initialСards.js"
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

import {
  popupEdite,
  popupAdd,
  popupPicture,
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

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
  headers: {
    authorization: '9420ae04-aee0-4c02-9434-ecee21317d2d',
    'Content-Type': 'application/json'
  }
}

const api = new Api(config);


// function renderInitialCards(item) {
//   const card = new Card(item, '.elements-template', api, {
//     handleCardClick: () => {
//       popupWithImage.open(item.name, item.link);
//     }
//   });

//   // сломалось
//   // defoltCards.addItem(card.generateCard());
//   console.log('renderInitialCards working');
// }

api.getInitialCards()
  .then((res) => {
    const defoltCards = new Section({
      items: res,
      renderer: (item) => {
        const card = new Card(item, '.elements-template', {
          handleCardClick: () => {
            popupWithImage.open(item.name, item.link);
          }
        });
        defoltCards.addItem(card.generateCard());
      }
    }, '.elements');
    defoltCards.renderItems();
  });

const addPopup = new PopupWithForm(popupAdd, {
  handleFormSubmit: (item) => {
    const newItem = {name: item.placeInput, link: item.linkInput};
    //тут надо починить
    renderInitialCards(newItem);
  }
});

addPopup.setEventListeners();

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
