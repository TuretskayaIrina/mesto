export default class Section {
  constructor({ renderer }, containerSelector){
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);

  }

  // отрендерить данные
  renderItems(api) {
    api.reverse().forEach((item) => {
      this._renderer(item)
    })
  }

  // добавить карточку
  addItem(item) {
    this._container.prepend(item);
  }
}
