import React, { PureComponent } from "react";
import { Container, Text } from "native-base";

export default class PersonDetails extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { name } = navigation.state.params.person;
    return { title: name };
  };
  constructor(props) {
    super(props);
    this.state = {
      person: props.navigation.state.params.person
    };
  }
  render() {
    return (
      <Container>
        <Text>{this.state.person.name}</Text>
      </Container>
    );
  }
}
