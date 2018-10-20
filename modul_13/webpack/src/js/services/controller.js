export default class Controller {
    constructor(view, model) {
      this._view = view;
      this._model = model;
  
      this._view.refs.btnAdd.addEventListener('click', this.handlerAddNote.bind(this),
      );
  
      this._view.refs.listsMenu.addEventListener('click', this.handlerDeleteNote.bind(this),
      );
  
      this.init();
    }
  
    init() {
        window.onload = () => function() {
          if(local.Storage.getItem('links') !== underfined){
            this._items = localStorage.getItem("links") || [];
          
          }
             this._view.init(this._items);
        }
      }
    
  
    handlerAddNote (event) {
      e.preventDefault();

      const text = this._view.refs.input.value;
      this._items.includes(text)? alert('Такой адресc существует!'): 
      this._view.checkURL(text)?  
      this._model.addItem({
        id: Date.now(),
        text }) : false;
      this._view.addNote(text);
      this._view.refs.form.reset();

      localStorage.setItem('links', JSON.stringify(this._items)); 
      this._view.init(this._items);
    }
  
  
  
    handlerDeleteNote ({target}) {
        const nodeName = target.nodeName;
        const action = target.dataset.action;
        if (nodeName !== 'BUTTON' || action !== 'delete-note') return;
        const parentId = Number(target.closest('.note').dataset.id);
        this.deleteNote(parentId)
        localStorage.setItem('links', JSON.stringify(this._items));
    }

    deleteNote(id) {
        this._model.removeItem(id);
        this._view.deleteNote(id);
      }
      
    }
  
