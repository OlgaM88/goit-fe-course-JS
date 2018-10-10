export default class Controller {
    constructor(view, model) {
      this._view = view;
      this._model = model;
  
      this._view.refs.btnAdd.addEventListener(
        'click',
        this.handlerAddNote.bind(this),
      );
  
      this._view.refs.listsMenu.addEventListener(
        'click',
        this.handlerDeleteNote.bind(this),
      );
  
      this.init();
    }
  
    init() {
        window.onload = function() {
            this._items = localStorage.this._items ? JSON.parse(localStorage.this._items) : [];
           this._view.createList();
        }
      }
    
  
    handleAddRecipe(e) {
      e.preventDefault();
  
      let target = evt.target;
      const request = this._view.refs.input.value;
      this._items.includes(request)? alert('Такой адресc существует!'): 
      this._view.checkURL(request)? this._items.push(request) : false;
      this._view.refs.form.reset();
      localStorage.this._items = JSON.stringify(this._items); 
      this._view.createList();
    }
  
  
  
    handlerDeleteNote ({target}) {
        const nodeName = target.nodeName;
        const action = target.dataset.action;
        if (nodeName !== 'BUTTON' || action !== 'delete-note') return;
        const parentItem = target.closest('.item');
        const delItem = parentItem.firstElementChild.textContent;
        parentItem.remove(); 
        const index = this._items.indexOf(delItem);
        this._items.splice(index, 1);
        localStorage.this._items = JSON.stringify(this._items);
    }
  
}