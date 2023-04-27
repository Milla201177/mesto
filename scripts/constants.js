export {initialCards, openPopup, closePopup, imgElementPopupImg, popupImgTitle, popupImgElement}
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

//открыть попап
function openPopup (item) {
    item.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByKeydownOnESC);
    item.addEventListener('click', closePopupByClickOnOverlay);
}

//закрыть попап
function closePopup (item) {
    item.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByKeydownOnESC);
    item.removeEventListener('click', closePopupByClickOnOverlay)
}

const imgElementPopupImg = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');
const popupImgElement = document.querySelector('.popup_type_img');