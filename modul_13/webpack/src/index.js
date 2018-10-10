import Model from './js/services/model';
import View from './js/services/view';
import Controller from './js/services/controller';

const model = new Model();
const view = new View();

new Controller(view, model);