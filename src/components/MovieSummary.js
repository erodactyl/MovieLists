import React, { PureComponent, Fragment } from "react";
import { Image } from "react-native";
import { Card, CardItem, Text, Left, Body, ListItem } from "native-base";
import ApiService from "../api/api.service";

export default class MovieSummary extends PureComponent {
  render() {
    const { movie, brief } = this.props;
    const overview =
      brief && movie.overview.length > 100
        ? `${movie.overview.substring(0, 100)}...`
        : movie.overview;
    return (
      <Card>
        <CardItem header>
          <Body>
            <Text>{movie.title}</Text>
            {this.props.full && (
              <Text note>
                {movie.genres
                  .reduce((acc, genre) => `${acc}, ${genre.name}`, "")
                  .substring(2)}
              </Text>
            )}
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text note>Release Date: {movie.release_date}</Text>
            <Text note>Popularity: {movie.popularity}</Text>
            {this.props.full && (
              <Fragment>
                <Text note>Budget: {movie.budget}</Text>
                <Text note>Revenue: {movie.revenue}</Text>
                <Text note>Status: {movie.status}</Text>
              </Fragment>
            )}
          </Body>
        </CardItem>
        <CardItem>
          <Image
            style={{ height: 500, flex: 1 }}
            source={{ uri: ApiService.getPosterUrl(movie.poster_path) }}
          />
        </CardItem>
        <CardItem>
          <Text>{overview}</Text>
        </CardItem>
      </Card>
    );
  }
}
