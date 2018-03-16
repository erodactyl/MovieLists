import React, { PureComponent } from "react";
import { Content } from "native-base";
import { Container, MovieSummary } from "../../components";

import { MoviesService } from "../../api";

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
  componentWillMount() {
    this.getMoiveInfo();
  }
  getMoiveInfo = async () => {
    const { id } = this.state.movie;
    const [movie, { cast }] = await Promise.all([
      MoviesService.getMovie(id),
      MoviesService.getMovieCredits(id)
    ]);
    const fullMovie = {
      ...movie,
      cast: cast.filter(person => person.profile_path !== null)
    };
    this.setState({ movie: fullMovie, fullyLoaded: true });
  };
  openCastPerson = person => {
    this.props.navigation.navigate("PersonDetails", { person });
  };
  render() {
    const { movie } = this.state;
    return (
      <Container>
        <Content>
          <MovieSummary
            movie={movie}
            full={this.state.fullyLoaded}
            openPerson={this.openCastPerson}
          />
        </Content>
      </Container>
    );
  }
}
