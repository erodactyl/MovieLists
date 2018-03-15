import React, { PureComponent } from "react";
import { Container, Text, Button } from "native-base";

export default class MoviesList extends PureComponent {
  render() {
    return (
      <Container>
        <Text>Movies List Screen</Text>
        <Button onPress={() => this.props.navigation.navigate("MovieDetails")}>
          <Text>MovieDetails</Text>
        </Button>
      </Container>
    );
  }
}
