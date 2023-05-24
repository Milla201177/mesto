export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._buttonClose = this._popup.querySelector('.popup__close');
    }

    //открыть попап
    open () {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._handleOverlayClose);
    }

    //закрыть попап
    close () {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popup.removeEventListener('click', this._handleOverlayClose);
    }

    //закрытие по ESC
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close()
        }
    };

    //закрытие по оверлею
    _handleOverlayClose = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    };

    //слушатель. закрытие нажатием на х
    setEventListeners () {
        this._buttonClose.addEventListener('click', () => {
            this.close()
        });
    }
}