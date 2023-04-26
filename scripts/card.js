import {openPopup} from "./index.js";

export default class Card {
    constructor(cardElement, itemTemplate) {
        this.cardElement = cardElement;
        this.itemTemplate = itemTemplate;
        this.cloneTemplateElement = document.querySelector(this.itemTemplate).content.querySelector('.card__item').cloneNode(true)
        this.buttonTrash = this.cloneTemplateElement.querySelector('.card__button-trash');
        this.buttonLike = this.cloneTemplateElement.querySelector('.card__button-like');
        this.cardImg = this.cloneTemplateElement.querySelector('.card__img');
        this.cardTitle = this.cloneTemplateElement.querySelector('.card__title');
        this.imgElementPopupImg = document.querySelector('.popup__img');
        this.popupImgTitle = document.querySelector('.popup__img-title');
        this.popupImgElement = document.querySelector('.popup_type_img');
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
        openPopup(this.popupImgElement);
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