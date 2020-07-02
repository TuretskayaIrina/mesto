import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open(name, link) {
    popupImage = this._popupSelector.querySelector('.popup__image');
    popupCaption = this._popupSelector.querySelector('.popup__caption');
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    super.open();

    console.log(popupImage);
    console.log(popupCaption);
  }
}
