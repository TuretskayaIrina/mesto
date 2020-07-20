export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._buttonSubmit = this._popupSelector.querySelector('.popup__button-save');
  }

  // закрыть на Esc
  _handleEscClose = (evt) => {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === 'Escape' && popupOpened) {
      this.close();
    }
  }

  // закрыть на overlay
  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  // открыть
  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('click', this._handleOverlayClose);
  }

  // закрыть
  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._handleOverlayClose);
  }

  // слушатели
  setEventListeners() {
    this._popupSelector.querySelector('.popup__button-close').addEventListener('click', () => {
      this.close();
    });
  }

  // уведомление о загрузке
  handleLoading(message) {
    this._buttonSubmit.textContent = message;
  }
}
