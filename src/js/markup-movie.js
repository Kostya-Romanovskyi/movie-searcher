import { onCheckRules } from '../index';

const movieGallery = document.querySelector('.gallery-movies');

export default function onCreateMarkupMovie(data) {
  console.log(data.data.results);
  const markup = data.data.results
    .map(
      ({
        title,
        original_title,
        overview,
        vote_average,
        release_date,
        poster_path,
      }) => `<div class="movie-card">
  <div class="img-wrapp">
    <img class="poster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}"  height="300"/>
  </div>
  <h2 class="title">${title}</h2>
  <h3 class="original-title">${original_title}</h3>
  <p class="release_date">Дата выхода: ${release_date}</p>
  <p class="vote_average">Рейтинг: ${vote_average}</p>
</div>`
    )
    .join('');

  movieGallery.insertAdjacentHTML('beforeend', markup);

  onCheckRules(data);
}
