import React, { PureComponent } from "react";
import { Image } from "react-native";
import { Container, Content, Card, CardItem, Text } from "native-base";
import ApiService from "../api/api.service";

export default class MovieDetails extends PureComponent {
  render() {
    const { movie } = this.props;
    return (
      <Card>
        <CardItem header>
          <Text>{movie.title}</Text>
          <Text note>{movie.genre}</Text>
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
