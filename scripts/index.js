const formEditElement = document.forms.formEdit;
const popupEditElement = document.querySelector('.popup_type_edit');
const nameInput = formEditElement.elements.name;
const jobInput = formEditElement.elements.job;
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const popupAddElement = document.querySelector('.popup_type_add');
const formAddElement = document.forms.formAdd;
const popupInputName = formAddElement.elements.img;
const popupInputImgLink = formAddElement.elements.src;

const cards = document.querySelector(".cards");
const itemTemplate = document.querySelector(".template").content;

const popupImgElement = document.querySelector('.popup_type_img');
const popupImg = popupImgElement.querySelector('.popup__img');
const popupImgTitle = popupImgElement.querySelector('.popup__img-title');

const popupEditOpenElement = document.querySelector('.profile__edit-button');
const popupAddOpenElement = document.querySelector('.profile__add-button');
const popupEditCloseElement = document.querySelector('.popup__close_type_edit');
const popupAddCloseElement = document.querySelector('.popup__close_type_add');
const popupImgCloseElement = document.querySelector('.popup__close_type_img');
const popupElement = Array.from(document.querySelectorAll('.popup'));

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        closePopup(popupEditElement);
        closePopup(popupAddElement);
        closePopup(popupImgElement);
    }});

const closePopupByClickOnOverlay = function (evt) {
    if (evt.target !== evt.currentTarget) {
        return;
    }
    closePopup(popupEditElement);
    closePopup(popupAddElement);
    closePopup(popupImgElement);
  };
popupElement.forEach((popupElement) => {
popupElement.addEventListener('click', closePopupByClickOnOverlay)});

function closePopup (item) {item.classList.remove('popup_opened');}
function openPopup (item) {item.classList.add('popup_opened');}

function deleteCard(evt) {
    const buttonTrash = evt.target;
    const parentItem = buttonTrash.closest('.card__item');
    parentItem.remove()
}
function toggleLike(evt) {
    evt.target.classList.toggle('card__button-like_active');
}
function openCardImg(evt) {
    const targetImage = evt.target;
    openPopup(popupImgElement);
    popupImg.src = targetImage.src;
    popupImgTitle.textContent = targetImage.alt;
    popupImg.alt = targetImage.alt;
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
    createCard();
    cards.append(newCard);
})

function addFormSubmit (evt) {
    evt.preventDefault()
    const newCard = createCard(popupInputName.value, popupInputImgLink.value, )
    newCard.src = popupInputImgLink.value;
    newCard.alt = popupInputName.value;
    createCard()
    closePopup(popupAddElement)
    cards.prepend(newCard);
}
formAddElement.addEventListener('submit', addFormSubmit);

function editFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupEditElement);
}
formEditElement.addEventListener('submit', editFormSubmit);

popupEditOpenElement.addEventListener('click', () => {
    openPopup(popupEditElement);
    nameInput.textContent = nameProfile.value;
    jobInput.textContent = jobProfile.value;
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










