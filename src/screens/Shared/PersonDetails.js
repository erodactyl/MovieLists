import React, { PureComponent } from "react";
import { Container, Text } from "native-base";
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
  async componentWillMount() {
    const person = await MoviesService.getPerson(this.state.person.id);
    this.setState({ person, fullyLoaded: true });
  }
  render() {
    return (
      <Container>
        <Text>{this.state.person.name}</Text>
      </Container>
    );
  }
}
