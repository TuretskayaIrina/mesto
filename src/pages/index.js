import {initialCards} from "../utils/initialСards.js"
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import Section from "../components/Section.js"
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from '../components/UserInfo.js'

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
  profileJob,
  formValidationOptions
} from "../utils/constants.js"

const validationPopupEdit = new FormValidator(formPopupEdit, formValidationOptions);

validationPopupEdit.enableValidation();

const validationPopupAdd = new FormValidator(formPopupAdd, formValidationOptions);

validationPopupAdd.enableValidation();

const popupWithImage = new PopupWithImage(popupPicture);

popupWithImage.setEventListeners();

function renderInitialCards(item) {
  const card = new Card(item, '.elements-template', {
    handleCardClick: () => {
      popupWithImage.open(item.name, item.link);
    }
  });
  defoltCards.addItem(card.generateCard());
}

const defoltCards = new Section({
  items: initialCards,
  renderer: ((item) => {
    renderInitialCards(item);
  })
}, '.elements');

defoltCards.renderItems();

const addPopup = new PopupWithForm(popupAdd, {
  handleFormSubmit: (item) => {
    const newItem = {name: item.placeInput, link: item.linkInput};
    renderInitialCards(newItem);
  }
});

addPopup.setEventListeners();

const userInfo = new UserInfo({
  profileName: profileName,
  profileJob: profileJob
})

const editePopup = new PopupWithForm(popupEdite, {
  handleFormSubmit: (item) => {
    userInfo.setUserInfo(item);
  }
});

editePopup.setEventListeners();

profileButtonEdit.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.job;
  validationPopupEdit.resetFormaValidation();
  editePopup.open();
})

buttonAdd.addEventListener('click', () => {
  formCreateCard.reset();
  validationPopupAdd.resetFormaValidation();
  addPopup.open();
})
