export default class Section {
    constructor({ renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector)
        this._renderer = renderer
    }

    addCard(items) {
        items.forEach(element => {
            this.addItem(element)
        })
    }

    addItem(cardElement) {
        this._container.prepend(this._renderer(cardElement))
    }
}