import React, { PureComponent } from "react";
import { Text, Button, List, Content, ListItem, Spinner } from "native-base";
import Container from "../../components/LoadingContainer";
import MoviesService from "../../api/movies.service";

export default class GenresList extends PureComponent {
  state = {
    genres: [],
    isLoading: true
  };
  async componentWillMount() {
    const { genres } = await MoviesService.getAllGenres();
    this.setState({ genres, isLoading: false });
  }
  render() {
    const { genres, isLoading } = this.state;
    return (
      <Container isLoading={isLoading}>
        <Content>
          <List>
            {this.state.genres.map(genre => (
              <ListItem
                key={genre.id}
                onPress={() =>
                  this.props.navigation.navigate("MoviesList", {
                    name: genre.name
                  })
                }
              >
                <Text>{genre.name}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
