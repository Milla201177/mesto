export {openPopup}

import {initialCards} from './constants.js'
import Card from './card.js'
import FormValidator from './formValidator.js'

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


//добавить карточки из массива
initialCards.forEach(cardElement => {
    const newCard = new Card(cardElement, itemTemplate)
    cards.append(newCard.createCard());
})

//отправить карточку
formAddElement.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const newCard = new Card ({name: formAddElement.elements.name.value, link: formAddElement.elements.link.value }, itemTemplate)
    closePopup(popupAddElement)
    cards.prepend(newCard.createCard());
})

//закрыть попап добавление карточки по клику на х
popupAddCloseElement.addEventListener('click', () => {
    closePopup(popupAddElement);
})

//открыть попап добавление карточки
popupAddOpenElement.addEventListener('click', () => {
    openPopup(popupAddElement);
    formAddElement.reset()
    const saveButtonAdd = document.querySelector('.popup__save-button_add')
    formValidatorAdd._disableButton(saveButtonAdd, validationConfig)
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
})

//закрыть попап большой картинки
popupImgCloseElement.addEventListener('click', () => {
    closePopup(popupImgElement)
})











