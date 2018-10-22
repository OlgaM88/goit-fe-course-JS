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
      window.onload = () => {
        if(localStorage.getItem('links') !== undefined){
          this._model._items = JSON.parse(localStorage.getItem("links")) || [];
        }
         this._view.init(this._model._items);
      }
    }
  

  handlerAddNote (event) {
    event.preventDefault();
   
    const text = this._view.refs.input.value;
    const checkNote = this._model._items.find(item =>
     item.text === text);
    if(checkNote !== undefined){
      alert("Такой адресс уже существует!")
      this._view.refs.form.reset();
      return;
    }
 
    if (this.checkURL(text)) {
      this._model.addItem({
        id: Date.now(),
        text });
      this._view.addNote({
        id: Date.now(),
        text });
      this._view.refs.form.reset();
    }else{
      alert("Адресс не корекктен!")
      this._view.refs.form.reset();
    }
};

  
  checkURL(url) {
    var regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
    return regURL.test(url);
}

  handlerDeleteNote ({target}) {
    
      const nodeName = target.nodeName;
      const action = target.dataset.action;
      if (nodeName !== 'BUTTON' || action !== 'delete-note') return;
      const parentItem = Number(target.closest('.list-note').dataset.id);
      console.log(parentItem);
      this.deleteNote(parentItem);
      localStorage.setItem('links', JSON.stringify(this._model._items));
  }

  deleteNote(id) {
      this._model.removeItem(id);
      this._view.deleteNote(id);
    }
    
  }

