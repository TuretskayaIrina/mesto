import Popup from "./Popup.js"

export default class PopupWithDelite extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonDelite = this._popupSelector.querySelector('.popup__button-save');

    console.log(this._popupSelector);
    console.log(this._buttonDelite);
  }

  deleteButtonHandler() {

  }
}
