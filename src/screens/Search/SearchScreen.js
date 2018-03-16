import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { Container, Text, Button, Icon, Input, Item } from "native-base";
import { MoviesService } from "../../api";

export default class SearchScreen extends PureComponent {
  state = { searchText: "" };
  onSearchChange = searchText => {
    this.setState({ searchText });
  };
  getMoviesFromSearch = query => async page => {
    const { results } = await MoviesService.getMoviesSearch(query, page);
    return results;
  };
  getPeopleFromSearch = query => async page => {
    const { results } = await MoviesService.getPeoplseSearch(query, page);
    return results;
  };
  searchMovies = () => {
    const { searchText } = this.state;
    this.props.navigation.navigate("MoviesList", {
      name: `Results for '${searchText}'`,
      getMovies: this.getMoviesFromSearch(searchText)
    });
  };
  searchPeople = () => {
    const { searchText } = this.state;
    this.props.navigation.navigate("PeoplesList", {
      name: `Results for '${searchText}'`,
      getPeople: this.getPeopleFromSearch(searchText)
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
          <Button onPress={this.searchPeople}>
            <Text>Search People</Text>
          </Button>
        </Item>
      </Container>
    );
  }
}
