  export default class Model  {
    constructor(items = []) {
      this._items = items || [];
      this._selectedIndex = -1;
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
          this.items.splice(index, 1);
          this.emit('change', this.items);
      }
  }
}