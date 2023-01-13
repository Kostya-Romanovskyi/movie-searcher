import MoviesServiseAPI from './js/movies-search';
import onCreateMarkupMovie from './js/markup-movie';

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-btn');
const movieGallery = document.querySelector('.gallery-movies');

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

const moviesServiseAPI = new MoviesServiseAPI();
const moviesInfoAPI = new MoviesInfoAPI();

export function onSearch(e) {
  e.preventDefault();

  moviesServiseAPI.query = e.target.elements.searchQuery.value;

  if (!moviesServiseAPI.query) {
    onReternMarkup();

    loadMoreBtn.classList.remove('is-active');
    return;
  }

  onReternMarkup();
  moviesServiseAPI.removePage();

  moviesServiseAPI.onGetMovies().then(onCreateMarkupMovie);
  moviesServiseAPI.removePage();
  moviesServiseAPI.onGetMovies().then(onCreateMarkupInfo);

  if (movieGallery !== '') {
    loadMoreBtn.classList.add('is-active');
  }
}

function onLoadMore() {
  moviesServiseAPI.onGetMovies().then(onCreateMarkupMovie);
}

export function onCreateMarkupInfo(data) {
  const id = data.data.results.map(item => item.id);
  moviesInfoAPI.onGetMoviesInfo(id);
}

export function onCheckRules(data) {
  const totalPages = data.data.total_pages;

  if (moviesServiseAPI.page === totalPages || totalPages === 0) {
    loadMoreBtn.classList.remove('is-active');
  }
}

function onReternMarkup() {
  movieGallery.innerHTML = '';
}
