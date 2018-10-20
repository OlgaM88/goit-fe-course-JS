  export default class Model  {
    constructor(items = []) {
      this._items = items || [];
    }
  
    getItems() {
      return this._items.slice();
      this._items = list;
    }
  
    addItem(item) {
      this._items.push(item);
    }
  
    removeItem(id) {
      const index = this._items.findIndex(item => item.id == id);
      if (index > -1) {
          this._items.splice(index, 1);
      }
  }
}