import React, { PureComponent } from "react";
import { Image } from "react-native";
import { Container, Content, Card, CardItem, Text } from "native-base";
import ApiService from "../api/api.service";

export default class MovieDetails extends PureComponent {
  render() {
    const { movie } = this.props;
    return (
      <Card>
        <CardItem style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Text>{movie.title}</Text>
          <Text note>Release Date: {movie.release_date}</Text>
          <Text note>Popularity: {movie.popularity}</Text>
        </CardItem>
        <CardItem>
          <Image
            style={{ height: 100, width: 100 }}
            source={{ uri: ApiService.getPosterUrl(movie.poster_path) }}
          />
        </CardItem>
        <CardItem>
          <Text>{movie.overview}</Text>
        </CardItem>
      </Card>
    );
  }
}
