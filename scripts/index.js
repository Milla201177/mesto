const formEditElement = document.forms.formEdit;
const popupEditElement = document.querySelector('.popup_type_edit');
const inputNameFormProfile = formEditElement.elements.name;
const jobInput = formEditElement.elements.job;
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const popupAddElement = document.querySelector('.popup_type_add');
const formAddElement = document.forms.formAdd;
const inputNameFormAddNewCard = formAddElement.elements.img;
const popupInputImgLink = formAddElement.elements.src;

const cards = document.querySelector(".cards");
const itemTemplate = document.querySelector(".template").content;

const popupImgElement = document.querySelector('.popup_type_img');
const imgElementPopupImg = popupImgElement.querySelector('.popup__img');
const popupImgTitle = popupImgElement.querySelector('.popup__img-title');

const popupEditOpenElement = document.querySelector('.profile__edit-button');
const popupAddOpenElement = document.querySelector('.profile__add-button');
const popupEditCloseElement = document.querySelector('.popup__close_type_edit');
const popupAddCloseElement = document.querySelector('.popup__close_type_add');
const popupImgCloseElement = document.querySelector('.popup__close_type_img');
const popupList = Array.from(document.querySelectorAll('.popup'));

const closePopupByKeydownOnESC = function (evt) {

    if (evt.key !== 'Escape') {
        return;
    }
    inputNameFormAddNewCard.value = '';
    popupInputImgLink.value = '';
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
    };

const closePopupByClickOnOverlay = function (evt) {
    if (evt.target !== evt.currentTarget) {
        return;
    }
        inputNameFormAddNewCard.value = '';
        popupInputImgLink.value = '';
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
  };

function closePopup (item) {
    item.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByKeydownOnESC);
    popupList.forEach((popupList) => {
        popupList.removeEventListener('click', closePopupByClickOnOverlay)
    });
}
function openPopup (item) {
    item.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByKeydownOnESC);
    popupList.forEach((popupList) => {
        popupList.addEventListener('click', closePopupByClickOnOverlay)
    });
    inputNameFormProfile.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function deleteCard(evt) {
    const buttonTrash = evt.target;
    const parentItem = buttonTrash.closest('.card__item');
    parentItem.remove();
}
function toggleLike(evt) {
    evt.target.classList.toggle('card__button-like_active');
}
function openCardImg(evt) {
    const targetImage = evt.target;
    openPopup(popupImgElement);
    imgElementPopupImg.src = targetImage.src;
    popupImgTitle.textContent = targetImage.alt;
    imgElementPopupImg.alt = targetImage.alt;
}

function createCard(name, link) {
    const cardElement = itemTemplate.cloneNode(true);
    const buttonTrash = cardElement.querySelector('.card__button-trash');
    const buttonLike = cardElement.querySelector('.card__button-like');
    const cardImg = cardElement.querySelector('.card__img');

    buttonTrash.addEventListener('click', deleteCard);
    buttonLike.addEventListener('click', toggleLike);
    cardImg.addEventListener('click', openCardImg);

    cardElement.querySelector('.card__title').innerText = name;
    cardImg.src = link;
    cardImg.alt = name;
    return cardElement;
}

initialCards.forEach(initialCards => {
    const newCard = createCard(initialCards.name, initialCards.link)
    cards.append(newCard);
})

function addFormSubmit (evt) {
    evt.preventDefault()
    const newCard = createCard(inputNameFormAddNewCard.value, popupInputImgLink.value)
    newCard.alt = inputNameFormAddNewCard.value;
    closePopup(popupAddElement)
    cards.prepend(newCard);
}
formAddElement.addEventListener('submit', addFormSubmit);

function editFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = inputNameFormProfile.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupEditElement);
}
formEditElement.addEventListener('submit', editFormSubmit);

popupEditOpenElement.addEventListener('click', () => {
    openPopup(popupEditElement);
})
popupEditCloseElement.addEventListener('click', () => {
    closePopup(popupEditElement);
})
popupAddCloseElement.addEventListener('click', () => {
    closePopup(popupAddElement);
})
popupAddOpenElement.addEventListener('click', () => {
    openPopup(popupAddElement);
})
popupImgCloseElement.addEventListener('click', () => {
    closePopup(popupImgElement)
})











