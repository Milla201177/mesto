import {initialCards, validationConfig, popupEditOpenElement, popupAddOpenElement, itemTemplate, info} from '../utils/constants.js'
import Card from '../components/card.js'
import FormValidator from '../components/formValidator.js'
import PopupWithImage from "../components/popupWithImage.js";
import Section from "../components/section.js";
import UserInfo from "../components/userInfo.js";
import PopupWithForm from "../components/popupWithForm.js";
import './index.css'

const formEditElement = document.forms.formEdit;
const formAddElement = document.forms.formAdd;
const formValidatorEdit = new FormValidator(validationConfig, formEditElement)
formValidatorEdit.enableValidation()
const formValidatorAdd = new FormValidator(validationConfig, formAddElement)
formValidatorAdd.enableValidation()

const popupWithImage = new PopupWithImage('.popup_type_img')
const userInfo = new UserInfo(info)
const popupFormEdit = new PopupWithForm('.popup_type_edit', (user) => {
    userInfo.setUserInfo(user);
})
const section = new Section({renderer: (element) => {
        const newCard = new Card(element, itemTemplate, popupWithImage.open)
        return newCard.createCard()
    }
}, '.cards')

section.addCard(initialCards)
const popupFormAdd = new PopupWithForm('.popup_type_add', (data) => {
    section.addItem(data);
})

popupAddOpenElement.addEventListener('click', () => {
    popupFormAdd.open();
    formValidatorAdd.disableButton()
})

popupEditOpenElement.addEventListener('click', () => {
    popupFormEdit.setInputValues(userInfo.getUserInfo())
    popupFormEdit.open()
})
popupAddOpenElement.addEventListener('click', () => {
    popupFormAdd.open();
})
popupWithImage.setEventListeners()
popupFormEdit.setEventListeners()
popupFormAdd.setEventListeners()


















