import {initialCards, validationConfig, formEditElement, formAddElement, popupEditOpenElement, popupAddOpenElement, itemTemplate} from '../utils/constants.js'
import Card from '../components/card.js'
import FormValidator from '../components/formValidator.js'
import PopupWithImage from "../components/popupWithImage.js";
import Section from "../components/section.js";
import UserInfo from "../components/userInfo.js";
import PopupWithForm from "../components/popupWithForm.js";

const formValidatorEdit = new FormValidator(validationConfig, formEditElement)
formValidatorEdit.enableValidation()
const formValidatorAdd = new FormValidator(validationConfig, formAddElement)
formValidatorAdd.enableValidation()

const popupWithImage = new PopupWithImage('.popup_type_img')
const userInfo = new UserInfo()
const popupFormEdit = new PopupWithForm('.popup_type_edit', (data) => {
    userInfo.setUserInfo(data);
})
const section = new Section({
    items: initialCards,
    renderer: (element) => {
        const newCard = new Card(element, itemTemplate, popupWithImage.open)
        return newCard.createCard()
    }
}, '.cards')

section.addCard()
const popupFormAdd = new PopupWithForm('.popup_type_add', (data) => {
    section.addItem(data);
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


















