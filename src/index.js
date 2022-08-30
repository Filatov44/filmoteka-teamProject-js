import TrendingMovies from './js/trending-movies';
import { headMarkup } from './js/markup';
import './js/modal-footer';
import './js/open-close-modal';
const refs = {
  listFilm: document.querySelector('.listFilm'),
};

const trendingMovies = new TrendingMovies();
const startPage = 1;
trendingMovies.getGenres();
trendingMovies
  .getMovies(startPage)
  .then(({ results, total_results, total_pages, page }) => {
    const markup = createMarkup(results);
    refs.listFilm.insertAdjacentHTML('beforeend', markup);
  });

function createMarkup(cards) {
  return cards.reduce((acc, card) => acc + headMarkup(card), '');
}
