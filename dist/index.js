(()=>{"use strict";const e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__btn-disabled",inputErrorClass:"popup__input_type_error"},t=document.forms.formEdit,s=document.forms.formAdd,r=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button");class o{constructor(e,t,s){this._cardElement=e,this._itemTemplate=t,this.openImgPopup=s,this._cloneTemplateElement=document.querySelector(this._itemTemplate).content.querySelector(".card__item").cloneNode(!0),this._buttonTrash=this._cloneTemplateElement.querySelector(".card__button-trash"),this._buttonLike=this._cloneTemplateElement.querySelector(".card__button-like"),this._cardImg=this._cloneTemplateElement.querySelector(".card__img"),this._cardTitle=this._cloneTemplateElement.querySelector(".card__title")}createCard=()=>(this._cardTitle.textContent=this._cardElement.cardname,this._cardImg.src=this._cardElement.link,this._cardImg.alt=this._cardElement.cardname,this._setEventListener(),this._cloneTemplateElement);_toggleLike=()=>{this._buttonLike.classList.toggle("card__button-like_active")};_deleteCard=()=>{this._cloneTemplateElement.remove()};handleCardClick=()=>{this.openImgPopup(this._cardElement)};_setEventListener=()=>{this._buttonTrash.addEventListener("click",this._deleteCard),this._buttonLike.addEventListener("click",this._toggleLike),this._cardImg.addEventListener("click",this.handleCardClick)}}class i{constructor(e,t){this.formSelector=e.formSelector,this.inputSelector=e.inputSelector,this.submitButtonSelector=e.submitButtonSelector,this.inactiveButtonClass=e.inactiveButtonClass,this.inputErrorClass=e.inputErrorClass,this.formInputs=Array.from(t.querySelectorAll(this.inputSelector)),this.formButton=t.querySelector(this.submitButtonSelector)}enableValidation(){this._setEventListeners()}_enableButton=()=>{this.formButton.classList.remove(this.inactiveButtonClass),this.formButton.removeAttribute("disabled")};_disableButton=()=>{this.formButton.classList.add(this.inactiveButtonClass),this.formButton.setAttribute("disabled",!0)};_hideInputError=(e,t)=>{t.textContent="",e.classList.remove(this.inputErrorClass)};_showInputError=(e,t)=>{e.classList.add(this.inputErrorClass),t.textContent=e.validationMessage};_checkInputValidity=(e,t)=>{this.currentInputErrorContainer=document.querySelector(`.${e.id}-error`),e.checkValidity()?this._hideInputError(e,this.currentInputErrorContainer,t):this._showInputError(e,this.currentInputErrorContainer,t)};_setEventListeners=()=>{this._disableButton(this.formButton),this.formInputs.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._hasInvalidInput()?this._disableButton(this.formButton):this._enableButton(this.formButton)}))}))};_hasInvalidInput=()=>this.formInputs.some((e=>!e.validity.valid))}class a{constructor(e){this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".popup__close")}open(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._handleOverlayClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("click",this._handleOverlayClose)}_handleEscClose=e=>{"Escape"===e.key&&this.close()};_handleOverlayClose=e=>{e.target===e.currentTarget&&this.close()};setEventListeners(){this._buttonClose.addEventListener("click",(()=>{this.close()}))}}class l extends a{constructor(e,t){super(e),this._callbackSubmitForm=t,this._form=this._popup.querySelector(".popup__form"),this._input=this._form.querySelectorAll(".popup__input")}_getInputValues(){return this._values={},this._input.forEach((e=>{this._values[e.name]=e.value})),this._values}setInputValues(e){this._input.forEach((t=>{t.value=e[t.name]}))}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._callbackSubmitForm(this._getInputValues()),this.close()}))}close(){super.close(),this._form.reset()}}new i(e,t).enableValidation(),new i(e,s).enableValidation();const c=new class extends a{constructor(e){super(e),this._popupImg=this._popup.querySelector(".popup__img"),this._popupImgTitle=this._popup.querySelector(".popup__img-title")}open=e=>{this._popupImg.src=e.link,this._popupImgTitle.textContent=e.cardname,this._popupImg.alt=e.cardname,super.open()}}(".popup_type_img"),p=new class{constructor(){this._nameProfile=document.querySelector(".profile__name"),this._jobProfile=document.querySelector(".profile__job")}getUserInfo(){return{username:this._nameProfile.textContent,job:this._jobProfile.textContent}}setUserInfo(e){this._nameProfile.textContent=e.username,this._jobProfile.textContent=e.job}},u=new l(".popup_type_edit",(e=>{p.setUserInfo(e)})),d=new class{constructor({items:e,renderer:t},s){this._container=document.querySelector(s),this._items=e,this._renderer=t}addCard(){this._items.forEach((e=>{this.addItem(e)}))}addItem(e){this._container.prepend(this._renderer(e))}}({items:[{cardname:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{cardname:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{cardname:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{cardname:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{cardname:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{cardname:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:e=>new o(e,"#template",c.open).createCard()},".cards");d.addCard();const h=new l(".popup_type_add",(e=>{d.addItem(e)}));r.addEventListener("click",(()=>{u.setInputValues(p.getUserInfo()),u.open()})),n.addEventListener("click",(()=>{h.open()})),c.setEventListeners(),u.setEventListeners(),h.setEventListeners()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxFQUFxQitCLGlCQUFpQixTQUFTLEtBQzNDbUUsRUFBY2QsZUFBZU8sRUFBU0csZUFDdENJLEVBQWNsQyxNQUFNLElBRXhCOUQsRUFBb0I2QixpQkFBaUIsU0FBUyxLQUMxQ2dGLEVBQWEvQyxNQUFNLElBRXZCd0IsRUFBZWYsb0JBQ2Z5QixFQUFjekIsb0JBQ2RzQyxFQUFhdEMsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7aW5pdGlhbENhcmRzLCB2YWxpZGF0aW9uQ29uZmlnLCBmb3JtRWRpdEVsZW1lbnQsIGZvcm1BZGRFbGVtZW50LCBwb3B1cEVkaXRPcGVuRWxlbWVudCwgcG9wdXBBZGRPcGVuRWxlbWVudCwgaXRlbVRlbXBsYXRlfVxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICAgIHtcbiAgICAgICAgY2FyZG5hbWU6ICfQkNGA0YXRi9C3JyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9hcmtoeXouanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBjYXJkbmFtZTogJ9Cn0LXQu9GP0LHQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwnLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2NoZWx5YWJpbnNrLW9ibGFzdC5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNhcmRuYW1lOiAn0JjQstCw0L3QvtCy0L4nLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2l2YW5vdm8uanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBjYXJkbmFtZTogJ9Ca0LDQvNGH0LDRgtC60LAnLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2thbWNoYXRrYS5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNhcmRuYW1lOiAn0KXQvtC70LzQvtCz0L7RgNGB0LrQuNC5INGA0LDQudC+0L0nLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2tob2xtb2dvcnNreS1yYXlvbi5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGNhcmRuYW1lOiAn0JHQsNC50LrQsNC7JyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9iYWlrYWwuanBnJ1xuICAgIH1cbl07XG5jb25zdCB2YWxpZGF0aW9uQ29uZmlnID0ge1xuICAgIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXG4gICAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zYXZlLWJ1dHRvbicsXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19idG4tZGlzYWJsZWQnLFxuICAgIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJ1xufVxuY29uc3QgZm9ybUVkaXRFbGVtZW50ID0gZG9jdW1lbnQuZm9ybXMuZm9ybUVkaXQ7XG5jb25zdCBmb3JtQWRkRWxlbWVudCA9IGRvY3VtZW50LmZvcm1zLmZvcm1BZGQ7XG5jb25zdCBwb3B1cEVkaXRPcGVuRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpO1xuY29uc3QgcG9wdXBBZGRPcGVuRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJyk7XG5jb25zdCBpdGVtVGVtcGxhdGUgPSBcIiN0ZW1wbGF0ZVwiO1xuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICAgIGNvbnN0cnVjdG9yKGNhcmRFbGVtZW50LCBpdGVtVGVtcGxhdGUsIG9wZW5JbWdQb3B1cCkge1xuICAgICAgICB0aGlzLl9jYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50O1xuICAgICAgICB0aGlzLl9pdGVtVGVtcGxhdGUgPSBpdGVtVGVtcGxhdGU7XG4gICAgICAgIHRoaXMub3BlbkltZ1BvcHVwID0gb3BlbkltZ1BvcHVwO1xuICAgICAgICB0aGlzLl9jbG9uZVRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5faXRlbVRlbXBsYXRlKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtJykuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIHRoaXMuX2J1dHRvblRyYXNoID0gdGhpcy5fY2xvbmVUZW1wbGF0ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2J1dHRvbi10cmFzaCcpO1xuICAgICAgICB0aGlzLl9idXR0b25MaWtlID0gdGhpcy5fY2xvbmVUZW1wbGF0ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2J1dHRvbi1saWtlJyk7XG4gICAgICAgIHRoaXMuX2NhcmRJbWcgPSB0aGlzLl9jbG9uZVRlbXBsYXRlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1nJyk7XG4gICAgICAgIHRoaXMuX2NhcmRUaXRsZSA9IHRoaXMuX2Nsb25lVGVtcGxhdGVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190aXRsZScpO1xuICAgIH1cblxuICAgIC8v0YHQvtC30LTQsNGC0Ywg0LrQsNGA0YLRg1xuICAgIGNyZWF0ZUNhcmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuX2NhcmRFbGVtZW50LmNhcmRuYW1lO1xuICAgICAgICB0aGlzLl9jYXJkSW1nLnNyYyA9IHRoaXMuX2NhcmRFbGVtZW50Lmxpbms7XG4gICAgICAgIHRoaXMuX2NhcmRJbWcuYWx0ID0gdGhpcy5fY2FyZEVsZW1lbnQuY2FyZG5hbWU7XG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXIoKVxuICAgICAgICByZXR1cm4gdGhpcy5fY2xvbmVUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgfVxuICAgIC8vbGlrZVxuICAgIF90b2dnbGVMaWtlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9idXR0b25MaWtlLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRfX2J1dHRvbi1saWtlX2FjdGl2ZScpO1xuICAgIH1cbiAgICAvL9GD0LTQsNC70LjRgtGMINC60LDRgNGC0L7Rh9C60YNcbiAgICBfZGVsZXRlQ2FyZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2xvbmVUZW1wbGF0ZUVsZW1lbnQucmVtb3ZlKClcbiAgICB9XG4gICAgLy/QvtGC0LrRgNGL0YLRjCDQutCw0YDRgtC40L3QutGDINC90LAg0L/QvtC70L3Ri9C5INGN0LrRgNCw0L1cbiAgICBoYW5kbGVDYXJkQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMub3BlbkltZ1BvcHVwKHRoaXMuX2NhcmRFbGVtZW50KTtcbiAgICB9XG4gICAgLy/RgdC70YPRiNCw0YLQtdC70LhcbiAgICBfc2V0RXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fYnV0dG9uVHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9kZWxldGVDYXJkKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uTGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3RvZ2dsZUxpa2UpO1xuICAgICAgICB0aGlzLl9jYXJkSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDYXJkQ2xpY2spO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWxpZGF0aW9uQ29uZmlnLCBmb3JtKSB7XG4gICAgICAgIHRoaXMuZm9ybVNlbGVjdG9yID0gdmFsaWRhdGlvbkNvbmZpZy5mb3JtU2VsZWN0b3JcbiAgICAgICAgdGhpcy5pbnB1dFNlbGVjdG9yID0gdmFsaWRhdGlvbkNvbmZpZy5pbnB1dFNlbGVjdG9yXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uU2VsZWN0b3IgPSB2YWxpZGF0aW9uQ29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICAgICAgIHRoaXMuaW5hY3RpdmVCdXR0b25DbGFzcyA9IHZhbGlkYXRpb25Db25maWcuaW5hY3RpdmVCdXR0b25DbGFzc1xuICAgICAgICB0aGlzLmlucHV0RXJyb3JDbGFzcyA9IHZhbGlkYXRpb25Db25maWcuaW5wdXRFcnJvckNsYXNzXG4gICAgICAgIHRoaXMuZm9ybUlucHV0cyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuaW5wdXRTZWxlY3RvcikpXG4gICAgICAgIHRoaXMuZm9ybUJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICAgIH1cblxuICAgIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKClcbiAgICB9O1xuXG4gICAgX2VuYWJsZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgICAgdGhpcy5mb3JtQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9O1xuXG4gICAgX2Rpc2FibGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICAgIHRoaXMuZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfTtcblxuICAgIF9oaWRlSW5wdXRFcnJvciA9IChpbnB1dCwgY3VycmVudElucHV0RXJyb3JDb250YWluZXIpID0+IHtcbiAgICAgICAgY3VycmVudElucHV0RXJyb3JDb250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaW5wdXRFcnJvckNsYXNzKTtcbiAgICB9O1xuXG4gICAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0LCBjdXJyZW50SW5wdXRFcnJvckNvbnRhaW5lcikgPT4ge1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuaW5wdXRFcnJvckNsYXNzKTtcbiAgICAgICAgY3VycmVudElucHV0RXJyb3JDb250YWluZXIudGV4dENvbnRlbnQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9O1xuXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChpbnB1dCwgaW5wdXRFcnJvckNsYXNzKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudElucHV0RXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dC5pZH0tZXJyb3JgKVxuXG4gICAgICAgIGlmIChpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0LCB0aGlzLmN1cnJlbnRJbnB1dEVycm9yQ29udGFpbmVyLCBpbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXQsIHRoaXMuY3VycmVudElucHV0RXJyb3JDb250YWluZXIsIGlucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9kaXNhYmxlQnV0dG9uKHRoaXMuZm9ybUJ1dHRvbilcbiAgICAgICAgdGhpcy5mb3JtSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0KVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNhYmxlQnV0dG9uKHRoaXMuZm9ybUJ1dHRvbilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbmFibGVCdXR0b24odGhpcy5mb3JtQnV0dG9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIF9oYXNJbnZhbGlkSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1JbnB1dHMuc29tZShpdGVtID0+ICFpdGVtLnZhbGlkaXR5LnZhbGlkKVxuICAgIH07XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKVxuICAgICAgICB0aGlzLl9idXR0b25DbG9zZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKTtcbiAgICB9XG5cbiAgICAvL9C+0YLQutGA0YvRgtGMINC/0L7Qv9Cw0L9cbiAgICBvcGVuICgpIHtcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlT3ZlcmxheUNsb3NlKTtcbiAgICB9XG5cbiAgICAvL9C30LDQutGA0YvRgtGMINC/0L7Qv9Cw0L9cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW5lZCcpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICAgICAgICB0aGlzLl9wb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbG9zZSk7XG4gICAgfVxuXG4gICAgLy/Qt9Cw0LrRgNGL0YLQuNC1INC/0L4gRVNDXG4gICAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8v0LfQsNC60YDRi9GC0LjQtSDQv9C+INC+0LLQtdGA0LvQtdGOXG4gICAgX2hhbmRsZU92ZXJsYXlDbG9zZSA9IChldnQpID0+IHtcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy/RgdC70YPRiNCw0YLQtdC70YwuINC30LDQutGA0YvRgtC40LUg0L3QsNC20LDRgtC40LXQvCDQvdCwINGFXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgICAgICB0aGlzLl9idXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgY2FsbGJhY2tTdWJtaXRGb3JtKSB7XG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9jYWxsYmFja1N1Ym1pdEZvcm0gPSBjYWxsYmFja1N1Ym1pdEZvcm1cbiAgICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpXG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0JylcbiAgICB9XG4gICAgX2dldElucHV0VmFsdWVzKCkge1xuICAgICAgICB0aGlzLl92YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5faW5wdXQuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzXG4gICAgfVxuXG4gICAgc2V0SW5wdXRWYWx1ZXMoZGF0YVVzZXIpIHtcbiAgICAgICAgdGhpcy5faW5wdXQuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGRhdGFVc2VyW2lucHV0Lm5hbWVdXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrU3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuX2Zvcm0ucmVzZXQoKVxuICAgIH1cbn0iLCJpbXBvcnQge2luaXRpYWxDYXJkcywgdmFsaWRhdGlvbkNvbmZpZywgZm9ybUVkaXRFbGVtZW50LCBmb3JtQWRkRWxlbWVudCwgcG9wdXBFZGl0T3BlbkVsZW1lbnQsIHBvcHVwQWRkT3BlbkVsZW1lbnQsIGl0ZW1UZW1wbGF0ZX0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkLmpzJ1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtVmFsaWRhdG9yLmpzJ1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlckluZm8uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCAnLi4vLi4vcGFnZXMvaW5kZXguY3NzJ1xuXG5jb25zdCBmb3JtVmFsaWRhdG9yRWRpdCA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25Db25maWcsIGZvcm1FZGl0RWxlbWVudClcbmZvcm1WYWxpZGF0b3JFZGl0LmVuYWJsZVZhbGlkYXRpb24oKVxuY29uc3QgZm9ybVZhbGlkYXRvckFkZCA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25Db25maWcsIGZvcm1BZGRFbGVtZW50KVxuZm9ybVZhbGlkYXRvckFkZC5lbmFibGVWYWxpZGF0aW9uKClcblxuY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5wb3B1cF90eXBlX2ltZycpXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbygpXG5jb25zdCBwb3B1cEZvcm1FZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0oJy5wb3B1cF90eXBlX2VkaXQnLCAoZGF0YSkgPT4ge1xuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xufSlcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbih7XG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcbiAgICByZW5kZXJlcjogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKGVsZW1lbnQsIGl0ZW1UZW1wbGF0ZSwgcG9wdXBXaXRoSW1hZ2Uub3BlbilcbiAgICAgICAgcmV0dXJuIG5ld0NhcmQuY3JlYXRlQ2FyZCgpXG4gICAgfVxufSwgJy5jYXJkcycpXG5cbnNlY3Rpb24uYWRkQ2FyZCgpXG5jb25zdCBwb3B1cEZvcm1BZGQgPSBuZXcgUG9wdXBXaXRoRm9ybSgnLnBvcHVwX3R5cGVfYWRkJywgKGRhdGEpID0+IHtcbiAgICBzZWN0aW9uLmFkZEl0ZW0oZGF0YSk7XG59KVxuXG5wb3B1cEVkaXRPcGVuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3B1cEZvcm1FZGl0LnNldElucHV0VmFsdWVzKHVzZXJJbmZvLmdldFVzZXJJbmZvKCkpXG4gICAgcG9wdXBGb3JtRWRpdC5vcGVuKClcbn0pXG5wb3B1cEFkZE9wZW5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVwRm9ybUFkZC5vcGVuKCk7XG59KVxucG9wdXBXaXRoSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKVxucG9wdXBGb3JtRWRpdC5zZXRFdmVudExpc3RlbmVycygpXG5wb3B1cEZvcm1BZGQuc2V0RXZlbnRMaXN0ZW5lcnMoKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuX3BvcHVwSW1nID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWcnKTtcbiAgICAgICAgdGhpcy5fcG9wdXBJbWdUaXRsZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1nLXRpdGxlJyk7XG4gICAgfVxuXG4gICAgLy/QvtGC0LrRgNGL0YLRjCDQutCw0YDRgtC40L3QutGDINC90LAg0L/QvtC70L3Ri9C5INGN0LrRgNCw0L1cbiAgICBvcGVuID0gKGNhcmRFbGVtZW50KSA9PiB7XG4gICAgICAgdGhpcy5fcG9wdXBJbWcuc3JjID0gY2FyZEVsZW1lbnQubGluaztcbiAgICAgICB0aGlzLl9wb3B1cEltZ1RpdGxlLnRleHRDb250ZW50ID0gY2FyZEVsZW1lbnQuY2FyZG5hbWU7XG4gICAgICAgdGhpcy5fcG9wdXBJbWcuYWx0ID0gY2FyZEVsZW1lbnQuY2FyZG5hbWU7XG4gICAgICAgc3VwZXIub3BlbigpXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fbmFtZVByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fbmFtZScpO1xuICAgICAgICB0aGlzLl9qb2JQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2pvYicpO1xuICAgIH1cbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLl9uYW1lUHJvZmlsZS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIGpvYjogdGhpcy5fam9iUHJvZmlsZS50ZXh0Q29udGVudFxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFVzZXJJbmZvKGRhdGFVc2VyKSB7XG4gICAgICAgIHRoaXMuX25hbWVQcm9maWxlLnRleHRDb250ZW50ID0gZGF0YVVzZXIudXNlcm5hbWU7XG4gICAgICAgIHRoaXMuX2pvYlByb2ZpbGUudGV4dENvbnRlbnQgPSBkYXRhVXNlci5qb2I7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKVxuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXJcbiAgICB9XG5cbi8v0LTQvtCx0LDQstC40YLRjCDQutCw0YDRgtC+0YfQutC4INC40Lcg0LzQsNGB0YHQuNCy0LBcbiAgICBhZGRDYXJkKCkge1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGVsZW1lbnQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkSXRlbShjYXJkRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZCh0aGlzLl9yZW5kZXJlcihjYXJkRWxlbWVudCkpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uQ29uZmlnIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImZvcm1FZGl0RWxlbWVudCIsImRvY3VtZW50IiwiZm9ybXMiLCJmb3JtRWRpdCIsImZvcm1BZGRFbGVtZW50IiwiZm9ybUFkZCIsInBvcHVwRWRpdE9wZW5FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInBvcHVwQWRkT3BlbkVsZW1lbnQiLCJDYXJkIiwiY29uc3RydWN0b3IiLCJjYXJkRWxlbWVudCIsIml0ZW1UZW1wbGF0ZSIsIm9wZW5JbWdQb3B1cCIsInRoaXMiLCJfY2FyZEVsZW1lbnQiLCJfaXRlbVRlbXBsYXRlIiwiX2Nsb25lVGVtcGxhdGVFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsIl9idXR0b25UcmFzaCIsIl9idXR0b25MaWtlIiwiX2NhcmRJbWciLCJfY2FyZFRpdGxlIiwiY3JlYXRlQ2FyZCIsInRleHRDb250ZW50IiwiY2FyZG5hbWUiLCJzcmMiLCJsaW5rIiwiYWx0IiwiX3NldEV2ZW50TGlzdGVuZXIiLCJfdG9nZ2xlTGlrZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9kZWxldGVDYXJkIiwicmVtb3ZlIiwiaGFuZGxlQ2FyZENsaWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkZvcm1WYWxpZGF0b3IiLCJmb3JtIiwiZm9ybUlucHV0cyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JtQnV0dG9uIiwiZW5hYmxlVmFsaWRhdGlvbiIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9lbmFibGVCdXR0b24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJfZGlzYWJsZUJ1dHRvbiIsImFkZCIsInNldEF0dHJpYnV0ZSIsIl9oaWRlSW5wdXRFcnJvciIsImlucHV0IiwiY3VycmVudElucHV0RXJyb3JDb250YWluZXIiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJpZCIsImNoZWNrVmFsaWRpdHkiLCJmb3JFYWNoIiwiX2hhc0ludmFsaWRJbnB1dCIsInNvbWUiLCJpdGVtIiwidmFsaWRpdHkiLCJ2YWxpZCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cCIsIl9idXR0b25DbG9zZSIsIm9wZW4iLCJfaGFuZGxlRXNjQ2xvc2UiLCJfaGFuZGxlT3ZlcmxheUNsb3NlIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInNldEV2ZW50TGlzdGVuZXJzIiwiUG9wdXBXaXRoRm9ybSIsImNhbGxiYWNrU3VibWl0Rm9ybSIsInN1cGVyIiwiX2NhbGxiYWNrU3VibWl0Rm9ybSIsIl9mb3JtIiwiX2lucHV0IiwiX2dldElucHV0VmFsdWVzIiwiX3ZhbHVlcyIsIm5hbWUiLCJ2YWx1ZSIsInNldElucHV0VmFsdWVzIiwiZGF0YVVzZXIiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwicG9wdXBXaXRoSW1hZ2UiLCJfcG9wdXBJbWciLCJfcG9wdXBJbWdUaXRsZSIsInVzZXJJbmZvIiwiX25hbWVQcm9maWxlIiwiX2pvYlByb2ZpbGUiLCJnZXRVc2VySW5mbyIsInVzZXJuYW1lIiwiam9iIiwic2V0VXNlckluZm8iLCJwb3B1cEZvcm1FZGl0IiwiZGF0YSIsInNlY3Rpb24iLCJpdGVtcyIsInJlbmRlcmVyIiwiY29udGFpbmVyU2VsZWN0b3IiLCJfY29udGFpbmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiYWRkQ2FyZCIsImVsZW1lbnQiLCJhZGRJdGVtIiwicHJlcGVuZCIsInBvcHVwRm9ybUFkZCJdLCJzb3VyY2VSb290IjoiIn0=