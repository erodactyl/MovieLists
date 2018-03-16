import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Text,
  Button,
  Header,
  Icon,
  Input,
  Item
} from "native-base";
import MoviesService from "../../api/movies.service";

export default class SearchScreen extends PureComponent {
  state = { searchText: "" };
  onSearchChange = searchText => {
    this.setState({ searchText });
  };
  getMoviesFromSearch = query => async page => {
    const { results } = await MoviesService.getMoviesSearch(query, page);
    return results;
  };
  searchMovies = () => {
    const { searchText } = this.state;
    this.props.navigation.navigate("MoviesList", {
      name: `Results for '${searchText}'`,
      getMovies: this.getMoviesFromSearch(searchText)
    });
  };
  render() {
    return (
      <Container style={{ flex: 1, justifyContent: "center" }}>
        <Item rounded style={{ marginBottom: 40 }}>
          <Icon name="md-search" />
          <Input placeholder="Search" onChangeText={this.onSearchChange} />
        </Item>
        <Item style={{ justifyContent: "space-around" }}>
          <Button onPress={this.searchMovies}>
            <Text>Search Movies</Text>
          </Button>
          <Button>
            <Text>Search People</Text>
          </Button>
        </Item>
      </Container>
    );
  }
}
