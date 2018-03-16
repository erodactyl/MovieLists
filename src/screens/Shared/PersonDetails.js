import React, { PureComponent } from "react";
import { Container, Text, Content } from "native-base";
import { PersonSummary } from "../../components";

import { MoviesService } from "../../api";

export default class PersonDetails extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { name } = navigation.state.params.person;
    return { title: name };
  };
  constructor(props) {
    super(props);
    this.state = {
      fullyLoaded: false,
      person: props.navigation.state.params.person
    };
  }
  componentWillMount() {
    this.getPersonInfo();
  }
  getPersonInfo = async () => {
    const { id } = this.state.person;
    const [person, { cast }] = await Promise.all([
      MoviesService.getPerson(id),
      MoviesService.getPersonCredits(id)
    ]);
    const fullPerson = {
      ...person,
      movies: cast.filter(movie => movie.poster_path !== null)
    };
    this.setState({ person: fullPerson, fullyLoaded: true });
  };
  openPlayedMovie = movie => {
    this.props.navigation.navigate("MovieDetails", { movie });
  };
  render() {
    const { person, fullyLoaded } = this.state;
    return (
      <Container>
        <Content>
          <PersonSummary
            person={person}
            full={fullyLoaded}
            openMovie={this.openPlayedMovie}
          />
        </Content>
      </Container>
    );
  }
}
