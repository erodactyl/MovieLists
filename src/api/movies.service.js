import ApiService from "./api.service";

class MoviesService {
  request = async url => {
    const blob = await fetch(url);
    return blob.json();
  };
  getAllGenres = () => this.request(ApiService.getAllGenresUrl());
  getMoviesOfGenre = id => this.request(ApiService.getMoviesOfGenreUrl(id));
}

export default new MoviesService();
