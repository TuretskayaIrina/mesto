// export default class FormValidator {

// }


class FormValidator {
  constructor(formElement, formValidationOptions){
    this._formElement = formElement;
    this._formValidationOptions = formValidationOptions;
    this._button = this._formElement.querySelector(formValidationOptions.submitButtonSelector);//все кнопки сабмит
    this._inputs = Array.from(this._formElement.querySelectorAll(formValidationOptions.inputSelector)); //все инпуты
    this._errorSpans = Array.from(this._formElement.querySelectorAll(formValidationOptions.errorSpans));//все спаны
  }

  // вкл/выкл кнопки в зависимости от валидности
  _handleFormInput(){
    // console.log('handleFormInput working');
    const hasErrors = !this._formElement.checkValidity();
    this._button.disabled = hasErrors;
    this._button.classList.toggle(this._formValidationOptions.inactiveButtonClass, hasErrors);
  }

  // показать ошибки
  _showInputError (errorMessage) {
    // console.log('showInputError working');

    this._inputs.forEach(everyInput => {
      everyInput.classList.add(this._formValidationOptions.inputErrorClass)
    });
    this._errorSpans.forEach(everySpan => {
      everySpan.textContent = errorMessage;
      everySpan.classList.add(this._formValidationOptions.errorClass);
    });
  }

  // скрыть ошибки
  _hideInputError () {
    // console.log('hideInputError working');
    this._inputs.forEach(everyInput => {
      everyInput.classList.remove(this._formValidationOptions.inputErrorClass)
    });
    this._errorSpans.forEach(everySpan => {
      everySpan.classList.remove(this._formValidationOptions.errorClass);
      everySpan.textContent = '';
    });
  }

  // валидация инпутов
  _hendleInput (inputElement) {
    console.log('hendleInput working');

    const errorMessage = this._formElement.querySelector(`#${inputElement.id}-error`);

    if (!inputElement.validity.valid) {
      this._showInputError(errorMessage);
    } else {
      this._hideInputError();
    }
  }


  // слушатели
  _setEventListeners() {
    this._inputs.forEach((inputs) => {
      inputs.addEventListener('input', () => this._hendleInput(inputs))
    });
    this._formElement.addEventListener('input', () => this._handleFormInput());
  }

  // resetFormaValidation(){

  // }


  // сама валидация
  enableValidation() {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    });
    this._setEventListeners();
  }
}
