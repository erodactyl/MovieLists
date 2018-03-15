import React, { PureComponent } from "react";
import { Text, Button } from "native-base";
import Container from "../../components/LoadingContainer";
import MoviesService from "../../api/movies.service";

export default class MoviesList extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.name
    };
  };
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
