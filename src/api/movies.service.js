import ApiService from "./api.service";

class MoviesService {
  request = async url => {
    try {
      const blob = await fetch(url);
      return blob.json();
    } catch (e) {
      console.warn(e);
    }
  };
  getAllGenres = () => this.request(ApiService.getAllGenresUrl());
  getMoviesOfGenre = (id, page) =>
    this.request(ApiService.getMoviesOfGenreUrl(id, page));
  getMovie = id => this.request(ApiService.getMovieUrl(id));
  getMoviesSearch = (query, page) =>
    this.request(ApiService.getMoviesSearchUrl(query, page));
  getPeoplseSearch = (query, page) =>
    this.request(ApiService.getPeopleSearchUrl(query, page));
  getPerson = id => this.request(ApiService.getPersonUrl(id));
  getMovieCredits = id => this.request(ApiService.getMovieCreditsUrl(id));
  getPersonCredits = id => this.request(ApiService.getPersonCreditsUrl(id));
}

export default new MoviesService();
