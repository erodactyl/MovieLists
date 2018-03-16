import React, { PureComponent } from "react";
import { Content } from "native-base";
import Container from "../../components/LoadingContainer";
import MoviesService from "../../api/movies.service";
import MovieSummary from "../../components/MovieSummary";

export default class MovieDetails extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params.movie;
    return { title };
  };
  constructor(props) {
    super(props);
    this.state = {
      fullyLoaded: false,
      movie: props.navigation.state.params.movie
    };
  }
  async componentWillMount() {
    const movie = await MoviesService.getMovie(this.state.movie.id);
    this.setState({ movie, fullyLoaded: true });
  }
  render() {
    const { movie } = this.state;
    return (
      <Container>
        <Content>
          <MovieSummary movie={movie} full={this.state.fullyLoaded} />
        </Content>
      </Container>
    );
  }
}
