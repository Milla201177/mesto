export default class Card {
    constructor(cardElement, itemTemplate, openImgPopup) {
        this._cardElement = cardElement;
        this._itemTemplate = itemTemplate;
        this.openImgPopup = openImgPopup;
        this._cloneTemplateElement = document.querySelector(this._itemTemplate).content.querySelector('.card__item').cloneNode(true)
        this._buttonTrash = this._cloneTemplateElement.querySelector('.card__button-trash');
        this._buttonLike = this._cloneTemplateElement.querySelector('.card__button-like');
        this._cardImg = this._cloneTemplateElement.querySelector('.card__img');
        this._cardTitle = this._cloneTemplateElement.querySelector('.card__title');
    }

    createCard = () => {
        this._cardTitle.textContent = this._cardElement.cardname;
        this._cardImg.src = this._cardElement.link;
        this._cardImg.alt = this._cardElement.cardname;
        this._setEventListener()
        return this._cloneTemplateElement;
    }

    _toggleLike = () => {
        this._buttonLike.classList.toggle('card__button-like_active');
    }

    _deleteCard = () => {
        this._cloneTemplateElement.remove();
        this._cloneTemplateElement = null;
    }

    handleCardClick = () => {
        this.openImgPopup(this._cardElement);
    }

    _setEventListener = () => {
        this._buttonTrash.addEventListener('click', this._deleteCard);
        this._buttonLike.addEventListener('click', this._toggleLike);
        this._cardImg.addEventListener('click', this.handleCardClick);
    }
}