import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm
        this._form = this._popup.querySelector('.popup__form')
        this._input = this._form.querySelectorAll('.popup__input')
    }
    _getInputValues() {
        this._inputValue = {};
        this._input.forEach(input => {
            this._inputValue[input.name] = input.value
        })
        return this._inputValue
    }

    setInputValues(dataUser) {
        this._input.forEach(input => {
            input.value = dataUser[input.name]
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._callbackSubmitForm(this._getInputValues())
            this.close()
        })
    }

    close() {
        super.close();
        this._form.reset()
    }
}