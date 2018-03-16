import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import { Text, Button, List, Content, ListItem } from "native-base";
import MovieDetails from "../../components/MovieDetails";
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
    this.state = {
      movies: [],
      isLoading: true
    };
  }
  componentWillMount() {
    this.getMovies();
  }
  getMovies = async () => {
    this.setState({ isLoading: true });
    const movies = await this.props.navigation.state.params.getMovies(
      ++this.page
    );
    this.setState({ movies, isLoading: false });
  };
  render() {
    const { movies, isLoading } = this.state;
    return (
      <Container isLoading={isLoading}>
        <Content>
          {movies.map(movie => <MovieDetails key={movie.id} movie={movie} />)}
        </Content>
      </Container>
    );
  }
}
