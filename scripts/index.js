const popupEditElement = document.querySelector('.popup_type_edit');
const formEditElement = popupEditElement.querySelector('.popup__form_type_edit');
const nameInput = popupEditElement.querySelector('.popup__input_type_name');
const jobInput = popupEditElement.querySelector('.popup__input_type_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const popupAddElement = document.querySelector('.popup_type_add');
const formAddElement = popupAddElement.querySelector('.popup__form_type_add');
const popupInputName = popupAddElement.querySelector(".popup__input_type_img-name");
const popupInputImgLink = popupAddElement.querySelector(".popup__input_type_img");

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

//закрытие нажатием на esc
document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        closePopup(popupEditElement);
        closePopup(popupAddElement);
        closePopup(popupImgElement);
    }});

//закрытие кликом на оверлей
//let closePopupByClickOnOverlay = function (evt) {
//       console.log(evt.target, evt.currentTarget);
//    if (evt.target === evt.currentTarget) {
//    closePopup();
//    }
//  };
//    popupElement.addEventListener('click', closePopupByClickOnOverlay);

//валидация. редактировать профиль
//оба поля обязательные
// в поле «Имя» должно быть от 2 до 40 символов;
// в поле «О себе» должно быть от 2 до 200 символов;
//не активная кнопка
//formEditElement.removeEventListener('submit', editFormSubmit)

//const input = document.querySelector('#input');
//const error = document.querySelector('#error');
// Блок с ошибкой изначально скрыт
//input.addEventListener('keydown', function (evt) {
    // Проверяем, была ли введена цифра
//    if (Number.isNaN(Number(evt.key))) {
        // Если пользователь ввёл не цифру, показываем блок с ошибкой
//        error.style.display = 'block';
//    };
//});

//валидация. новое место
//оба поля обязательные
// в поле «Название» должно быть от 1 до 30 символов
// в поле «Ссылка на картинку» должен быть URL
//не активная кнопка
//formAddElement.removeEventListener('submit',

//const input = document.querySelector('#input');
//const error = document.querySelector('#error');
// Блок с ошибкой изначально скрыт
//input.addEventListener('keydown', function (evt) {
// Проверяем, была ли введена цифра
//    if (Number.isNaN(Number(evt.key))) {
// Если пользователь ввёл не цифру, показываем блок с ошибкой
//        error.style.display = 'block';
//    };
//});

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










