
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__btn-disabled',
    inputErrorClass: 'popup__input_type_error'
}

const enableValidation = ({ formSelector, ...rest}) => {
    const forms = Array.from(document.querySelectorAll(formSelector))
    forms.forEach(form => {
        form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        })
        setEventListeners(form, rest)
    })
};

const setEventListeners = (formToValidate, { inputSelector, submitButtonSelector, ...rest}) => {
    const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector))
    const formButton = formToValidate.querySelector(submitButtonSelector)
    disableButton(formButton, rest)
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input, rest)
            if (hasInvalidInput(formInputs)) {
                disableButton(formButton, rest)
            } else {
                enableButton(formButton, rest)
            }
        })
    })
};

const enableButton = (button, { inactiveButtonClass, ...rest}) => {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
};

const disableButton = (button, { inactiveButtonClass, ...rest}) => {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', true);
};

const hideInputError = (input, currentInputErrorContainer, { inputErrorClass}) => {
    currentInputErrorContainer.textContent = ''
    input.classList.remove(inputErrorClass);
};

const showInputError = (input, currentInputErrorContainer, { inputErrorClass}) => {
    input.classList.add(inputErrorClass);
    currentInputErrorContainer.textContent = input.validationMessage;
};

const checkInputValidity = (input, inputErrorClass) => {
    const currentInputErrorContainer = document.querySelector(`.${input.id}-error`)

    if (input.checkValidity()) {
        hideInputError(input, currentInputErrorContainer, inputErrorClass);
    } else {
        showInputError(input, currentInputErrorContainer, inputErrorClass);
    }
};

const hasInvalidInput = (formInputs) => {
    return formInputs.some(item => !item.validity.valid)
};

enableValidation(validationConfig)

