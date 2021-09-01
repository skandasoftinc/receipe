import View from './View';
import img from 'url:../../img/*';

class ResultsView extends View {
  _parentContainer = document.querySelector('.search-results');
  _generateMarkup() {
    return this._data.map(this._generatePreviewMarkup).join('');
  }

  _generatePreviewMarkup(result) {
    return `
    <li class="preview">
      <a class="preview__link " href="#${result.id}">
        <figure class="preview__fig">
          <img src="${result.image}" alt="${result.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${result.title}</h4>
          <p class="preview__publisher">${result.publisher}</p>
        </div>
      </a>
    </li>    
    `;
  }
}

export default new ResultsView();
