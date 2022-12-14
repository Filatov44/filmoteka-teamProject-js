import axios from 'axios';
import { API_KEY } from './api-key';

const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending';
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const TIME_WINDOW = 'week';
const MEDIA_TYPE = 'movie';
export const IMG_URL = 'https://image.tmdb.org/t/p';
//https://www.themoviedb.org/talk/5f3ef4eec175b200365ee352?language=uk-UA//

export default class TrendingMovies {
  constructor() {
    this.results = [];
    this.total_results = 0;
    this.page = 1;
    this.searchPage = 1;
    this.search = '';
  }

  genres = this.getGenres();

  async getGenres() {
    try {
      const response = await axios.get(GENRES_URL);
      const genres = await response.data.genres;
      localStorage.setItem('genres', JSON.stringify(genres));
    } catch {
      console.log(error);
    }
  }

  getGenresFromLocalStorage() {
    try {
      const genresFromLocalStorage = localStorage.getItem('genres');
      const genresAll = JSON.parse(genresFromLocalStorage);
      return genresAll;
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }

  genresTextual(genresIds) {
    const genresAll = this.getGenresFromLocalStorage();
    const newGenres = genresIds.map(genreId => {
      let newGenre = {};
      for (const genre of genresAll) {
        if (genre.id === genreId) {
          newGenre.name = genre.name;
          newGenre.id = genre.id;
          continue;
        }
      }
      return newGenre;
    });
    return newGenres;
  }

  genresGetShortList(genres) {
    let newGenres = [...genres];
    if (genres.length > 3) {
      newGenres = genres.slice(0, 2);
      newGenres.push('Other');
    }
    return newGenres;
  }

  async getMovies(pageNumber) {
    const query = `${TRENDING_URL}/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}&page=${pageNumber}`;
    try {
      const response = await axios.get(query);
      const newResults = response.data.results.map(result => {
        let newResult = {};
        for (let key in result) {
          newResult[key] = result[key];
          newResult.genres = this.genresTextual(result.genre_ids);
        }
        return newResult;
      });
      const newData = {};
      newData.total_results = response.data.total_results;
      newData.page = response.data.page;
      newData.total_pages = response.data.total_pages;
      newData.results = newResults;
      this.page = pageNumber;
      return newData;
    } catch {
      console.log(error);
    }
  }

  async searchMovies(searchedText, pageNumber) {
    const query = `${BASE_URL}/search/${MEDIA_TYPE}?api_key=${API_KEY}&language=en-US&page=${pageNumber}&query=${searchedText}`;
    this.search = searchedText;
    try {
      const response = await axios.get(query);
      const newResults = response.data.results.map(result => {
        let newResult = {};
        for (let key in result) {
          newResult[key] = result[key];
          newResult.genres = this.genresTextual(result.genre_ids);
        }
        return newResult;
      });
      const newData = {};
      newData.total_results = response.data.total_results;
      newData.page = response.data.page;
      newData.total_pages = response.data.total_pages;
      newData.results = newResults;
      this.page = 1;
      return newData;
    } catch {
      console.log(error);
    }
  }

  async getMoviesById(id) {
    const query = `
https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    try {
      const response = await axios.get(query);
      //const searchedMovie = response.data.results.find(result => result.id === id
      return response.data;
    } catch {
      console.log(error);
    }
  }

  getPage() {
    return this.page;
  }

  getSearchPage() {
    return this.searchPage;
  }

  changePage(newPage) {
    this.page = newPage;
  }

  getSearch() {
    return this.search;
  }
}
