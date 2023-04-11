
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};



const validationConfig = {
    formElement: '.popup__form',
    inputElement: '.popup__input',
    buttonElement: '.popup__save-button',
    inactiveButtonClass: 'popup__btn-disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error'
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__save-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation () {
 const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
}
enableValidation()

//function enableValidation(settings) { // принимает аргумет - объект, который внутри функции мы назовем settings
                                      //.....
//    const forms = [...document.querySelectorAll(settings.formSelector)] // читаем из settings поле formSelector и получаем значение '.popup__form'
//}

//const formList = Array.from(document.querySelectorAll('.popup__form'));

function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__btn-disabled');
        buttonElement.setAttribute('disabled', true);
    }
    else {
        buttonElement.classList.remove('popup__btn-disabled');
        buttonElement.removeAttribute('disabled');
    }
}
