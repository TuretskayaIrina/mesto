import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {

  }

  setEventListeners() {
    super.setEventListener();
    this._popupSelector.querySelector('.popup__form').addEventListener('submit', this._handleSubmitForm.bind(this));
  }

  close() {
    super.close();
    this._popupSelector.querySelector('.popup__form').reset();
  }
}
