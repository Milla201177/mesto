export default class FormValidator {
    constructor(validationConfig, form) {
        this.formSelector = validationConfig.formSelector
        this.inputSelector = validationConfig.inputSelector
        this.submitButtonSelector = validationConfig.submitButtonSelector
        this.inactiveButtonClass = validationConfig.inactiveButtonClass
        this.inputErrorClass = validationConfig.inputErrorClass
        this.formInputs = Array.from(form.querySelectorAll(this.inputSelector))
        this.formButton = form.querySelector(this.submitButtonSelector)
    }

    enableValidation() {
        this._setEventListeners()
    };

    _enableButton = () => {
        this.formButton.classList.remove(this.inactiveButtonClass);
        this.formButton.removeAttribute('disabled');
    };

    _disableButton = () => {
        this.formButton.classList.add(this.inactiveButtonClass);
        this.formButton.setAttribute('disabled', true);
    };

    _hideInputError = (input, currentInputErrorContainer) => {
        currentInputErrorContainer.textContent = ''
        input.classList.remove(this.inputErrorClass);
    };

    _showInputError = (input, currentInputErrorContainer) => {
        input.classList.add(this.inputErrorClass);
        currentInputErrorContainer.textContent = input.validationMessage;
    };

    _checkInputValidity = (input, inputErrorClass) => {
        this.currentInputErrorContainer = document.querySelector(`.${input.id}-error`)

        if (input.checkValidity()) {
            this._hideInputError(input, this.currentInputErrorContainer, inputErrorClass);
        } else {
            this._showInputError(input, this.currentInputErrorContainer, inputErrorClass);
        }
    };

    _setEventListeners = () => {
        this._disableButton(this.formButton)
        this.formInputs.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input)
                if (this._hasInvalidInput()) {
                    this._disableButton(this.formButton)
                } else {
                    this._enableButton(this.formButton)
                }
            })
        })
    };

    _hasInvalidInput = () => {
        return this.formInputs.some(item => !item.validity.valid)
    };
}