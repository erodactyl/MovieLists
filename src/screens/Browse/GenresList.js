import React, { PureComponent } from "react";
import { Text, List, Content, ListItem } from "native-base";
import { Container } from "../../components";
import { MoviesService } from "../../api";

export default class GenresList extends PureComponent {
  state = {
    isLoading: true,
    genres: []
  };
  async componentWillMount() {
    const { genres } = await MoviesService.getAllGenres();
    this.setState({ genres, isLoading: false });
  }
  selectGenre = async genre => {
    this.props.navigation.navigate("MoviesList", {
      name: genre.name,
      getMovies: this.getMoviesById(genre.id)
    });
  };
  getMoviesById = id => async page => {
    const { results } = await MoviesService.getMoviesOfGenre(id, page);
    return results;
  };
  render() {
    const { genres, isLoading } = this.state;
    return (
      <Container isLoading={isLoading}>
        <Content>
          <List>
            {this.state.genres.map(genre => (
              <ListItem
                key={genre.id}
                button
                onPress={() => this.selectGenre(genre)}
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
