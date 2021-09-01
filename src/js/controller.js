import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Fraction } from 'fractional';
import * as model from './model';
import recipeView from './view/recipeView';
import searchView from './view/searchView';
import resultsView from './view/resultsView';

// import icons from 'url:../img/icons.svg';
// console.log(icons);
// const icons = import('../img/*.svg'); // asyn await
// import img from 'url:../img/*';

if (module.hot) {
  module.hot.accept();
}

const showReceipe = async () => {
  try {
    const id = window.location.hash?.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err, '💥💥');
    recipeView.renderError();
  }
};

const controllerSearch = async e => {
  try {
    e.preventDefault();
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    await model.loadSearchResults(query);
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.error(err);
    recipeView.renderError();
  }
};
const init = function () {
  recipeView.addHandlerRender(showReceipe);
  searchView.addHandlerRender(controllerSearch);
};
init();
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showReceipe));

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
