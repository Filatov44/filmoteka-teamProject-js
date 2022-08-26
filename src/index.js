import TrendingMovies from './js/trending-movies';
import { headMarkup } from './js/markup';
import { currentWatchedPage } from './js/header-library';
import { currentQueuePage } from './js/header-library';

const refs = {
  listFilm: document.querySelector('.listFilm'),
};

const trendingMovies = new TrendingMovies();
trendingMovies.getGenres();
trendingMovies.getMovies().then(({ results, total_results, page }) => {
  const markup = createMarkup(results);
  refs.listFilm.insertAdjacentHTML('beforeend', markup);
});

function createMarkup(cards) {
  return cards.reduce((acc, card) => acc + headMarkup(card), '');
}