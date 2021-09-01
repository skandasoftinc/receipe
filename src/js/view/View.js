import img from 'url:../../img/*';

export default class View {
  _data;

  clear() {
    this._parentContainer.innerHTML = '';
  }

  renderSpinner() {
    const markup = `       
                   <div class="spinner">
                    <svg>
                      <use href="${img['icons.svg']}#icon-loader"></use>
                    </svg>
                  </div> `;
    this._parentContainer.insertAdjacentHTML('afterbegin', markup);
  }
  render(data) {
    this._data = data;
    this.clear();
    const markup = this._generateMarkup();
    this._parentContainer.insertAdjacentHTML('beforeend', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
        <div>
          <svg>
            <use href="${img['icons.svg']}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this.clear();
    this._parentContainer.insertAdjacentHTML('beforeend', markup);
  }
  renderMessage(message = this._message) {
    const markup = `
        <div class="message">
        <div>
          <svg>
            <use href="${img['icons.svg']}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this.clear();
    this._parentContainer.insertAdjacentHTML('beforeend', markup);
  }
}
