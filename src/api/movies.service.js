import ApiService from "./api.service";

class MoviesService {
  request = async url => {
    try {
      const blob = await fetch(url);
      return blob.json();
    } catch (e) {
      console.log(e);
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
}

export default new MoviesService();
