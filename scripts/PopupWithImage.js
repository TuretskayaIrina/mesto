import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open(name, link) {

    console.log(document.querySelector('.popup__image'));
    console.log(document.querySelector('.popup__caption'));

    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    super.open();
  }
}
