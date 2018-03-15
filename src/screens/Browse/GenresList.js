import React, { PureComponent } from "react";
import { Container, Text, Button } from "native-base";

export default class GenresList extends PureComponent {
  render() {
    return (
      <Container>
        <Text>Genres List Screen</Text>
        <Button onPress={() => this.props.navigation.navigate("MoviesList")}>
          <Text>Movies List</Text>
        </Button>
      </Container>
    );
  }
}
