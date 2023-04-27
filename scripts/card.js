import {openPopup, imgElementPopupImg, popupImgTitle, popupImgElement} from "./constants.js";

export default class Card {
    constructor(cardElement, itemTemplate) {
        this.cardElement = cardElement;
        this.itemTemplate = itemTemplate;
        this.cloneTemplateElement = document.querySelector(this.itemTemplate).content.querySelector('.card__item').cloneNode(true)
        this.buttonTrash = this.cloneTemplateElement.querySelector('.card__button-trash');
        this.buttonLike = this.cloneTemplateElement.querySelector('.card__button-like');
        this.cardImg = this.cloneTemplateElement.querySelector('.card__img');
        this.cardTitle = this.cloneTemplateElement.querySelector('.card__title');
    }

    createCard = () => {
        this.cardTitle.textContent = this.cardElement.name;
        this.cardImg.src = this.cardElement.link;
        this.cardImg.alt = this.cardElement.name;
        this._setEventListener()
        return this.cloneTemplateElement;
    }

    //like
    _toggleLike = () => {
        this.buttonLike.classList.toggle('card__button-like_active');
    }

//удалить карточку
    _deleteCard = () => {
        this.cloneTemplateElement.remove()
    }

//открыть картинку на полный экран
    _openCardImg = () => {
        openPopup(popupImgElement);
        imgElementPopupImg.src = this.cardImg.src;
        popupImgTitle.textContent = this.cardImg.alt;
        imgElementPopupImg.alt = this.cardImg.alt;
    }

    //слушатели
    _setEventListener = () => {
        this.buttonTrash.addEventListener('click', this._deleteCard);
        this.buttonLike.addEventListener('click', this._toggleLike);
        this.cardImg.addEventListener('click', this._openCardImg);
    }
}