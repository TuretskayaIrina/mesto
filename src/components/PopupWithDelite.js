import Popup from "./Popup.js"

export default class PopupWithDelite extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._buttonDelite = this._popupSelector.querySelector('.elements__delete');
  }

  deleteButtonHandler() {
    // this._buttonDelite.addEventListener('click', (evt) => {
    //   evt.preventDefault();
    //   this.close();

    //   console.log('deleteButtonHandler wirking');
    // })
    console.log('deleteButtonHandler wirking');
  }
}
