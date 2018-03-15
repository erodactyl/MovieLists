import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { Container, Text, Button } from "native-base";

export default class SearchScreen extends PureComponent {
  render() {
    return (
      <Container>
        <Text>Search Screen component</Text>
        <Container>
          <Button onPress={() => this.props.navigation.navigate("MoviesList")}>
            <Text>Movies</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate("PeoplesList")}>
            <Text>People</Text>
          </Button>
        </Container>
      </Container>
    );
  }
}
