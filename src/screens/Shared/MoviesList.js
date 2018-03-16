import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import { Text, Button, List, Content, ListItem } from "native-base";
import MovieSummary from "../../components/MovieSummary";
import Container from "../../components/LoadingContainer";
import MoviesService from "../../api/movies.service";

export default class MoviesList extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.name
    };
  };
  constructor(props) {
    super(props);
    this.page = 0;
    this.isFetching = false;
    this.state = {
      movies: [],
      isLoading: true
    };
  }
  componentWillMount() {
    this.getMovies();
  }
  getMovies = async () => {
    if (this.isFetching) return;
    this.isFetching = true;
    if (!this.state.movies.length) this.setState({ isLoading: true });
    const movies = await this.props.navigation.state.params.getMovies(
      ++this.page
    );
    this.setState(
      prevState => ({
        movies: [...prevState.movies, ...movies],
        isLoading: false
      }),
      () => {
        this.isFetching = false;
      }
    );
  };
  openMovie = movie => {
    this.props.navigation.navigate("MovieDetails", {
      movie
    });
  };
  render() {
    const { movies, isLoading } = this.state;
    return (
      <Container isLoading={isLoading}>
        <Content onScrollEndDrag={this.getMovies}>
          {movies.map(movie => (
            <ListItem
              button
              onPress={() => this.openMovie(movie)}
              key={movie.id}
            >
              <MovieSummary movie={movie} brief />
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}
