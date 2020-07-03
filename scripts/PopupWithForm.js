import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputs = this._popupSelector.querySelectorAll('.popup__input');
    this._dataInputs = {};
    this._inputs.foreEach(input => {
      this._dataInputs[input.namme] = input.value;
    });
    return this._dataInputs;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.querySelector('.popup__form').addEventListener('submit', this._handleSubmitForm.bind(this));
  }

  close() {
    super.close();
    this._popupSelector.querySelector('.popup__form').reset();
  }
}


//сохранить изменения в профиле
// function popupEditSubmitHandler (evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(popupEdite);
// }
