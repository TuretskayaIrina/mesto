class Section {
  constructor({ items, render }, containerSelector){
    this._items = items;
    this._render - render;
    this._container = document.querySelector(containerSelector);
  }
  renderAll(){
    this._items.forEach(item => {
      this._render(item)
    })
  }
  addItem(item) {
    this._container.prepend(item);
  }
}
