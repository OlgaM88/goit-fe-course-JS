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
          <button data-action="delete">Удалить</button>
        </div>
      </div>
      </li>
    `;
  }

  checkURL(url) {
    var regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
    return regURL.test(url);
}

}