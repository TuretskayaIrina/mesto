import Popup from "./Popup.js"
export default class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._buttonSubmit = this._popupSelector.querySelector('.popup__button-save');
  }

  // собираем данные инпутов
  getInputValues() {
    this._inputs = this._popupSelector.querySelectorAll('.popup__input');
    this._dataInputs = {};
    this._inputs.forEach(input => {
      this._dataInputs[input.name] = input.value;
    });
    return this._dataInputs;
  }

  // обработка submit
  _handleSubmit(evt) {
    evt.preventDefault();
    this.handleLoading('Сохранение...');
    this._handleFormSubmit(this.getInputValues());
    this.close();
  }

  // слушатели
  setEventListeners() {
    super.setEventListeners();
    this._submit = this._handleSubmit.bind(this);
    this._popupSelector.querySelector('.popup__form').addEventListener('submit', this._submit);
  }

  // открыть
  open() {
    super.open();
    this.handleLoading('Сохранить');
  }

  // закрыть
  close() {
    super.close();
    this._popupSelector.querySelector('.popup__form').reset();
  }
}
