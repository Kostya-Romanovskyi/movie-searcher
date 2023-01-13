const axios = require('axios').default;

export default class MoviesServiseAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 0;
  }
  async onGetMovies() {
    const url = 'https://api.themoviedb.org';
    const key = 'f496025f6cb0adfa3f9f05b6edf25d52';

    this.onIncrement();

    try {
      const response = await axios.get(
        `${url}/3/search/movie?api_key=${key}&query=${this.searchQuery}&language=ru&page=${this.page}`
      );
      //   console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  onIncrement() {
    this.page += 1;
  }

  removePage() {
    this.page = 0;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
