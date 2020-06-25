export default class FormValidator {
  constructor(formElement, formValidationOptions){
    this._formElement = formElement;
    this._formValidationOptions = formValidationOptions;
    this._button = this._formElement.querySelector(formValidationOptions.submitButtonSelector);//все кнопки сабмит
    this._inputs = Array.from(this._formElement.querySelectorAll(formValidationOptions.inputSelector)); //все инпуты
    this._errorSpans = Array.from(this._formElement.querySelectorAll(formValidationOptions.errorSpans));//все спаны
  }

  // вкл/выкл кнопки в зависимости от валидности
  _handleFormInput(){
    const hasErrors = !this._formElement.checkValidity();
    this._button.disabled = hasErrors;
    this._button.classList.toggle(this._formValidationOptions.inactiveButtonClass, hasErrors);
  }

  // скрыть ошибки
  _hideInputError () {
    this._inputs.forEach(everyInput => {
      everyInput.classList.remove(this._formValidationOptions.inputErrorClass)
    });
    this._errorSpans.forEach(everySpan => {
      everySpan.classList.remove(this._formValidationOptions.errorClass);
      everySpan.textContent = '';
    });
  }

  // показать ошибки
  _showInputError (inputElement, errorMessage, errorElement) {
    inputElement.classList.add(this._formValidationOptions.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._formValidationOptions.errorClass);
  }

  // валидация инпутов
  _hendleInput (inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, errorElement);
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }

  // слушатели
  _setEventListeners() {
    this._inputs.forEach((inputs) => {
      inputs.addEventListener('input', () => this._hendleInput(inputs))
    });
    this._formElement.addEventListener('input', () => this._handleFormInput());
  }

  //сброс валидации для повторного открытия спанов
  resetFormaValidation(){
    this._inputs.forEach((input) => {
      if (input.classList.contains(this._formValidationOptions.inputErrorClass)) {
        input.classList.remove(this._formValidationOptions.inputErrorClass);
      }
    });
    this._errorSpans.forEach((error) => {
      error.classList.remove(this._formValidationOptions.errorClass);
      error.textContent = '';
    });
    this._handleFormInput();
  }

  // сама валидация
  enableValidation() {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    });
    this._setEventListeners();
  }
}
