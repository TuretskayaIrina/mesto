// export default class FormValidator {

// }


class FormValidator {
  constructor(formElement, formValidationOptions){
    this._formElement = formElement;
    this._formValidationOptions = formValidationOptions;
    this._inputSelector = formValidationOptions.inputSelector;//все инпуты
    this._button = this._formElement.querySelector(formValidationOptions.submitButtonSelector);//все кнопки сабмит
    this._inactiveButtonClass = formValidationOptions.inactiveButtonClass;//стили для неактивных сабмитов (серая кнопка)
    // this._inactiveClass = this._button.querySelector(formValidationOptions.inactiveButtonClass);
    this._inputErrorClass = formValidationOptions.inputErrorClass;//стили для инпута во время ошибки
    this._errorClass = formValidationOptions.errorClass;// стили для спана во время ошибки

    console.log(formElement);
    console.log(this._button);
    console.log(formValidationOptions.inactiveButtonClass);
    console.log(formValidationOptions.inputErrorClass);
    console.log(formValidationOptions.errorClass);
    // console.log(this._formElement.querySelector(formElement.submitButtonSelector));
  }

  handleFormInput(){
    const hasErrors = !this._formElement.checkValidity();
    console.log(this._button);
    this._button.disabled = hasErrors;
    this._button.classList.toggle(this._formValidationOptions.inactiveButtonClass, hasErrors);
  }

  _showInputError (inputElement,errorMessage, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError (inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _hendleInput (inputElement) {
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, errorElement);
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }

  _setEventListeners() {
    const inputElements = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const submitButton = this._formElement.querySelector(this._submitButtonSelector);
    //const formElement = document.querySelector(this._formElement);

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener('input', () => this._hendleInput(inputElement))
    });
    this._formElement.addEventListener('input', () => this.handleFormInput(this._formElement, submitButton, this._inactiveButtonClass))
  }

  enableValidation() {
    const submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    });
    this._setEventListeners();
  }
}

// //функция вкл/выкл кнопки в зависимости от валидности формы
// function handleFormInput(formElement, submitButton, inactiveButtonClass){
//   const hasErrors = !formElement.checkValidity();
//   submitButton.disabled = hasErrors;
//   submitButton.classList.toggle(inactiveButtonClass, hasErrors);
// }

// // Функция отображения ошибок
// function showInputError (formElement, inputElement, errorMessage, formValidationOptions) {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(formValidationOptions.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(formValidationOptions.errorClass);
// };

// // Функция скрытия ошибок
// function hideInputError (formElement, inputElement, formValidationOptions) {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(formValidationOptions.inputErrorClass);
//   errorElement.classList.remove(formValidationOptions.errorClass);
//   errorElement.textContent = '';
// };

// // Функция валидации инпутов
// function hendleInput (formElement, inputElement, formValidationOptions) {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, formValidationOptions);
//   } else {
//     hideInputError(formElement, inputElement, formValidationOptions);
//   }
// };

// function enableValidation(options) {
//   const formElement = Array.from(document.querySelectorAll(options.formSelector));
//   formElement.forEach(formElement => {
//     const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector));
//     inputElements.forEach(input => {
//       input.addEventListener('input', () => hendleInput (formElement, input, options))
//     })
//     const submitButton = formElement.querySelector(options.submitButtonSelector);
//     formElement.addEventListener('submit', evt => {
//       evt.preventDefault()
//     })
//     formElement.addEventListener('input', () => handleFormInput(formElement, submitButton, options.inactiveButtonClass))
//   })
// }
