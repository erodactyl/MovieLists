class ApiService {
  constructor() {
    this.protocol = "https:";
    this.host = "api.themoviedb.org";
    this.version = "3";
    this.key = "197abcfcf30b69baab29196ca161b38f";
  }
  getOptionsFromObject = obj => {
    return Object.keys(obj).reduce(
      (acc, key) => `${acc}&${key}=${obj[key]}`,
      ""
    );
  };
  getUrl = (route, options = {}) => {
    const { protocol, host, version, key } = this;
    const op = this.getOptionsFromObject(options);
    return `${protocol}//${host}/${version}/${route}?api_key=${key}${op}`;
  };
  getAllGenresUrl = () => {
    return this.getUrl("genre/movie/list");
  };
  getMoviesOfGenreUrl = (genreId, page) => {
    return this.getUrl("discover/movie", {
      with_genres: genreId,
      include_adult: false,
      page
    });
  };
  getMovieUrl = id => {
    return this.getUrl(`movie/${id}`);
  };
  getPosterUrl = route => {
    return `${this.protocol}//image.tmdb.org/t/p/w500${route}`;
  };
  getMovieUrl = id => {
    return this.getUrl(`movie/${id}`);
  };
  getMoviesSearchUrl = (query, page) => {
    return encodeURI(
      this.getUrl("search/movie", { query, include_adult: false, page })
    );
  };
}

export default new ApiService();
