import Popup from "./Popup.js"

export default class PopupWithDelite extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonDelite = this._popupSelector.querySelector('.popup__button-delete');
  }

  setHandleSubmit(foo) {
    this._handleSubmit = foo;
  }

  setEventListeners() {
    this._buttonDelite.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
      this.close();
    });
    super.setEventListeners();
  }
}
