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
  getPoster = route => this.request(ApiService.getPosterUrl());
}

export default new MoviesService();
