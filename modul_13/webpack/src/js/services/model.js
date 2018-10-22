export default class Model  {
  constructor() {
    this._items = [];
  }

  addItem(item) {
    this._items.push(item);
    console.log(this._items);
    localStorage.setItem('links', JSON.stringify(this._items));
  }

  removeItem(id) {
    const index = this._items.findIndex(item => item.id == id);
    if (index > -1) {
        this._items.splice(index, 1);
    }
}
}
