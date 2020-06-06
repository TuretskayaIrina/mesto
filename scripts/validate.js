 function enableValidation(options) {
  const formElement = Array.from(document.querySelectorAll(options.formSelector));
  formElement.forEach(formElement => {
    const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector));
    inputElements.forEach(input => {
      input.addEventListener('input', evt => hendelInput (formElement, input, options))
    })
    const submitButton = formElement.querySelector(options.submitButtonSelector);
    formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    })
    formElement.addEventListener('input', () => handleFormInput(formElement, submitButton, options.inactiveButtonClass))
  })
}

//функция вкл/выкл кнопки в зависимости от валидности формы
function handleFormInput(formElement, submitButton, inactiveButtonClass){
  const hasErrors = !formElement.checkValidity();
  submitButton.disabled = hasErrors;
  submitButton.classList.toggle(inactiveButtonClass, hasErrors);
}

// Функция отображения ошибок
function showInputError (formElement, inputElement, errorMessage, formValidationOptions) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(formValidationOptions.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formValidationOptions.errorClass);
};

// Функция скрытия ошибок
function hideInputError (formElement, inputElement, formValidationOptions) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(formValidationOptions.inputErrorClass);
  errorElement.classList.remove(formValidationOptions.errorClass);
  errorElement.textContent = '';
};

// Функция валидации инпутов
function hendelInput (formElement, inputElement, formValidationOptions) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, formValidationOptions);
  } else {
    hideInputError(formElement, inputElement, formValidationOptions);
  }
};
