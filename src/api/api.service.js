class ApiService {
  constructor() {
    this.protocol = "https:";
    this.host = "api.themoviedb.org";
    this.version = "3";
    this.key = "197abcfcf30b69baab29196ca161b38f";
  }
  getUrl = (route, options = {}) => {
    const { protocol, host, version, key } = this;
    const op = this._getOptionsFromObject(options);
    return encodeURI(
      `${protocol}//${host}/${version}/${route}?api_key=${key}${op}`
    );
  };
  _getOptionsFromObject = obj =>
    Object.keys(obj).reduce((acc, key) => `${acc}&${key}=${obj[key]}`, "");
  getAllGenresUrl = () => this.getUrl("genre/movie/list");
  getMoviesOfGenreUrl = (genreId, page) =>
    this.getUrl("discover/movie", {
      with_genres: genreId,
      include_adult: false,
      page
    });
  getMovieUrl = id => this.getUrl(`movie/${id}`);
  getPosterUrl = route => `${this.protocol}//image.tmdb.org/t/p/w500${route}`;
  getMovieUrl = id => this.getUrl(`movie/${id}`);
  getMoviesSearchUrl = (query, page) =>
    this.getUrl("search/movie", { query, include_adult: false, page });
  getPeopleSearchUrl = (query, page) =>
    this.getUrl("search/person", { query, include_adult: false, page });
  getPersonUrl = id => this.getUrl(`person/${id}`);
  getMovieCreditsUrl = id => this.getUrl(`movie/${id}/credits`);
}

export default new ApiService();
