//import initialCards from './constants.js'
//import FormValidator from './formValidator.js'
//import Card from './card.js'

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const formEditElement = document.forms.formEdit;
const popupEditElement = document.querySelector('.popup_type_edit');
const inputNameFormProfile = formEditElement.elements.name;
const jobInput = formEditElement.elements.job;
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const popupAddElement = document.querySelector('.popup_type_add');
const formAddElement = document.forms.formAdd;

const cards = document.querySelector(".cards");

const popupImgElement = document.querySelector('.popup_type_img');

const popupEditOpenElement = document.querySelector('.profile__edit-button');
const popupAddOpenElement = document.querySelector('.profile__add-button');
const popupEditCloseElement = document.querySelector('.popup__close_type_edit');
const popupAddCloseElement = document.querySelector('.popup__close_type_add');
const popupImgCloseElement = document.querySelector('.popup__close_type_img');
const popupList = Array.from(document.querySelectorAll('.popup'));

const itemTemplate = "#template";

class FormValidator {
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
        this.forms = Array.from(document.querySelectorAll(this.formSelector))
        this.forms.forEach(form => {
            form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            })
            this._setEventListeners(form)
        })
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

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__btn-disabled',
    inputErrorClass: 'popup__input_type_error'
}
const formValidatorEdit = new FormValidator(validationConfig, formEditElement)
formValidatorEdit.enableValidation()
const formValidatorAdd = new FormValidator(validationConfig, formAddElement)
formValidatorAdd.enableValidation()

class Card {
    constructor(cardElement, itemTemplate) {
        this.cardElement = cardElement;
        this.itemTemplate = itemTemplate;
        this.cloneTemplateElement = document.querySelector(this.itemTemplate).content.querySelector('.card__item').cloneNode(true)
        this.buttonTrash = this.cloneTemplateElement.querySelector('.card__button-trash');
        this.buttonLike = this.cloneTemplateElement.querySelector('.card__button-like');
        this.cardImg = this.cloneTemplateElement.querySelector('.card__img');
        this.cardTitle = this.cloneTemplateElement.querySelector('.card__title');
        this.imgElementPopupImg = popupImgElement.querySelector('.popup__img');
        this.popupImgTitle = popupImgElement.querySelector('.popup__img-title');
    }

    createCard = () => {
        this.cardTitle.textContent = this.cardElement.name;
        this.cardImg.src = this.cardElement.link;
        this.cardImg.alt = this.cardElement.name;
        this._setEventListener()
        return this.cloneTemplateElement;
    }

    //like
    _toggleLike = (evt) => {
        evt.target.classList.toggle('card__button-like_active');
    }

//удалить карточку
    _deleteCard = (evt) => {
        this.buttonTrash = evt.target;
        this.parentItem = this.buttonTrash.closest('.card__item');
        this.parentItem.remove();
    }

//открыть картинку на полный экран
    _openCardImg = (evt) => {
        this.targetImage = evt.target;
        openPopup(popupImgElement);
        this.imgElementPopupImg.src = this.targetImage.src;
        this.popupImgTitle.textContent = this.targetImage.alt;
        this.imgElementPopupImg.alt = this.targetImage.alt;
    }

    //слушатели
    _setEventListener = () => {
        this.buttonTrash.addEventListener('click', this._deleteCard);
        this.buttonLike.addEventListener('click', this._toggleLike);
        this.cardImg.addEventListener('click', this._openCardImg);
    }
}

//добавить карточки из массива
initialCards.forEach(cardElement => {
    this.newCard = new Card(cardElement, itemTemplate)
    cards.append(this.newCard.createCard());
})


//отправить карточку
formAddElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
    this.newCard = new Card ({name: formAddElement.elements.name.value, link: formAddElement.elements.link.value }, itemTemplate)
    closePopup(popupAddElement)
    cards.prepend(this.newCard.createCard());
})

//закрыть попап добавление карточки по клику на х
popupAddCloseElement.addEventListener('click', () => {
    closePopup(popupAddElement);
})

//открыть попап добавление карточки
popupAddOpenElement.addEventListener('click', () => {
    openPopup(popupAddElement);
    formAddElement.reset()
    this.saveButtonAdd = document.querySelector('.popup__save-button_add')
    formValidatorAdd._disableButton(this.saveButtonAdd, validationConfig)
})

//закрыть по ESC
const closePopupByKeydownOnESC = function (evt) {

    if (evt.key !== 'Escape') {
        return;
    }
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
};

//закрыть по клику на оверлей
const closePopupByClickOnOverlay = function (evt) {
    if (evt.target !== evt.currentTarget) {
        return;
    }
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
};

//закрыть попап
function closePopup (item) {
    item.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByKeydownOnESC);
    popupList.forEach((popupList) => {
        popupList.removeEventListener('click', closePopupByClickOnOverlay)
    });
}

//открыть попап
function openPopup (item) {
    item.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByKeydownOnESC);
    popupList.forEach((popupList) => {
        popupList.addEventListener('click', closePopupByClickOnOverlay)
    });

}

//редактировать профиль
formEditElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    nameProfile.textContent = inputNameFormProfile.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupEditElement);
})

//открыть попап редакции профиля
popupEditOpenElement.addEventListener('click', () => {
    openPopup(popupEditElement);
    inputNameFormProfile.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
})

//закрыть попап редакции профиля
popupEditCloseElement.addEventListener('click', () => {
    closePopup(popupEditElement);
//    formValidatorEdit._hideInputError()
})

//закрыть попап большой картинки
popupImgCloseElement.addEventListener('click', () => {
    closePopup(popupImgElement)
})











