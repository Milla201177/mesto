import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImg = this._popup.querySelector('.popup__img');
        this._popupImgTitle = this._popup.querySelector('.popup__img-title');
    }

    //открыть картинку на полный экран
    open = (cardElement) => {
       this._popupImg.src = cardElement.link;
       this._popupImgTitle.textContent = cardElement.cardname;
       this._popupImg.alt = cardElement.cardname;
       super.open()
    }
}