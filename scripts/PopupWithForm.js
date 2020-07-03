import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputs = this._popupSelector.querySelectorAll('.popup__input');
    // console.log(this._inputs);
    this._dataInputs = {};
    this._inputs.forEach(input => {
      this._dataInputs[input.name] = input.value;
    });

    console.log(this._dataInputs);
    return this._dataInputs;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._submit = this._handleSubmit.bind(this);
    this._popupSelector.querySelector('.popup__form').addEventListener('submit', this._submit);
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
