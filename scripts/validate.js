 function enableValidation(options) {
  const formElement = Array.from(document.querySelectorAll(options.formSelector));
  formElement.forEach(formElement => {
    const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector));
    inputElements.forEach(input => {
      input.addEventListener('input', evt => hendelInput (evt, options.inputErrorClass))
    })
    const submitButton = formElement.querySelector(options.submitButtonSelector);
    formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    })
    formElement.addEventListener('input', () => hendelFormInput(formElement, submitButton, options.inactiveButtonClass))
  })
}

function hendelFormInput(formElement, submitButton, inactiveButtonClass){
  const hasErrors = !formElement.checkValidity();
  submitButton.disabled = hasErrors;
  submitButton.classList.toggle(inactiveButtonClass, hasErrors);
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
