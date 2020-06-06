 function enableValidation(options) {
  const formElement = document.querySelector(options.formSelector);
  const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector));
  inputElements.forEach(input => {
    input.addEventListener('input', evt => hendelInput (evt, options.inputErrorClass))
  })
  const submitButton = formElement.querySelector(options.submitButtonSelector);
  formElement.addEventListener('submit', evt => {
    event.preventDefault()
  })
  formElement.addEventListener('input', () => {
    isFormValid = formElement.checkValidity();
    submitButton.disabled = !isFormValid;
    submitButton.classList.toggle(options.inactiveButtonClass, !isFormValid);
  })
}

function hendelInput(evt, inputErrorClass) {
  const input = evt.target;
  const error = document.querySelector(`#${input.id}-error`);
  if (input.checkValidity()){
    error.textContent = '';
    input.classList.remove(inputErrorClass);
  } else {
    error.textContent = input.validationMessage;
    input.classList.add(inputErrorClass);
  }
}

// function hendelFormSubmit(submitButton, inputElements) {
//   const areAllValid = inputElements.every(inputElements => inputElements.checkValidity());
// }

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
const formValidationOptions = {
  formSelector: '.popup__form',//все формы
  inputSelector: '.popup__input',//все инпуты
  submitButtonSelector: '.popup__button-save',//все кнопки сабмит
  inactiveButtonClass: 'popup__button-save_inactive',//стили для неактивных сабмитов (серая кнопка)
  inputErrorClass: 'popup__input_type-error',//стили для инпута во время ошибки
  errorClass: '.popup__input-error_visible'// стили для спана во время ошибки
}

enableValidation(formValidationOptions);
