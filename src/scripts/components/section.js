export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector)
        this._items = items
        this._renderer = renderer
    }

    addCard() {
        this._items.forEach(element => {
            this.addItem(element)
        })
    }

    addItem(cardElement) {
        this._container.prepend(this._renderer(cardElement))
    }
}