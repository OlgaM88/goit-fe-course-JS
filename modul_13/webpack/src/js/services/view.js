export default class View {
    constructor() {
      this.refs = {};
  
      this.refs.form = document.querySelector('form');
      this.refs.btnAdd = this.refs.form.querySelector('.btn-add');
      this.refs.recipeList = document.querySelector('.recipe-list');
      this.refs.input = document.querySelector('input');
      this.refs.listContainer = document.querySelector('.list-container');
      this.refs.listsMenu = document.querySelector('.list-menu');
    }
  
    init(list) {
        const markup = list.reduce((string, note) => {
          return string + this.createRecipeMarkup(note);
        }, '');
    
        this.refs.listsMenu.insertAdjacentHTML('beforeend', markup);
      }

      addNote(note) {
        const markup = this.createNoteMarkup(note);
        this.refs.listsMenu.insertAdjacentHTML('beforeend', markup);
      }

      deleteNote() {
        const index = this._model.selectedIndex;
        this._model.removeItemAt(index);

      }

    createNoteMarkup({ text }) {
    return `
      <li class="list-note" style="outline: 1px solid #212121;">
        <p>${text}</p>
        <div class="actions">
          <button data-action="delete">Удалить</button>
        </div>
      </div>
    `;
  }

}