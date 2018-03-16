import React, { PureComponent } from "react";
import { View } from "react-native";
import { Container, Text, Button, Icon, Input, Item } from "native-base";
import { DismissKeyboard } from "../../../components";
import styles from "./styles";

import { MoviesService } from "../../../api";

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
      <DismissKeyboard>
        <Container style={styles.container}>
          <Item rounded style={styles.searchBar}>
            <Icon name="md-search" />
            <Input placeholder="Search" onChangeText={this.onSearchChange} />
          </Item>
          <View style={styles.searchButtons}>
            <Button onPress={this.searchMovies}>
              <Text>Search Movies</Text>
            </Button>
            <Button onPress={this.searchPeople}>
              <Text>Search People</Text>
            </Button>
          </View>
        </Container>
      </DismissKeyboard>
    );
  }
}
