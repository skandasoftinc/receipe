import View from './View';
class SearchView extends View {
  _parentContainer = document.querySelector('.search');
  getQuery() {
    const query = this._parentContainer.querySelector('input').value;
    this._parentContainer.querySelector('input').value = '';
    return query;
  }
  addHandlerRender(handler) {
    this._parentContainer.addEventListener('submit', handler);
  }
}
export default new SearchView();
