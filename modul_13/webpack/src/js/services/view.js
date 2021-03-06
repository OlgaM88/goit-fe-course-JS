export default class View {
  constructor() {
    this.refs = {};

    this.refs.form = document.querySelector('form');
    this.refs.btnAdd = this.refs.form.querySelector('.btn-add');
    this.refs.input = document.querySelector('input');
    this.refs.listContainer = document.querySelector('.list-container');
    this.refs.listsMenu = this.refs.listContainer.querySelector('.list-menu');
  }

  init(list) {
      const markup = list.reduce((string, note) => {
        return string + this.createNoteMarkup(note);
      }, '');
  
      this.refs.listsMenu.insertAdjacentHTML('beforeend', markup);
    }

    addNote(note) {
      const markup = this.createNoteMarkup(note);
      this.refs.listsMenu.insertAdjacentHTML('beforeend', markup);
    }

    deleteNote(id) {
      const el = this.refs.listsMenu.querySelector(`.list-note[data-id="${id}"]`);
      el.remove();
    }

    createNoteMarkup({ text, id }) {
  return `
    <li class="list-note" data-id="${id}" >
      <p>${text}</p>
      <div class="actions">
        <button data-action="delete-note">Удалить</button>
      </div>
    </div>
    </li>
  `;
}



}