import React, { PureComponent } from "react";
import { Container, Text, Button } from "native-base";

export default class PeoplesList extends PureComponent {
  render() {
    return (
      <Container>
        <Text>Peoples List Screen</Text>
        <Button onPress={() => this.props.navigation.navigate("PersonDetails")}>
          <Text>Person details</Text>
        </Button>
      </Container>
    );
  }
}
