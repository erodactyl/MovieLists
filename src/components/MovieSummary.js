import React, { PureComponent, Fragment } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Body, List } from "native-base";
import { PersonSummary } from "../components";

import { ApiService } from "../api";

export default class MovieSummary extends PureComponent {
  render() {
    const { movie, brief, full } = this.props;
    const overview =
      brief && movie.overview.length > 100
        ? `${movie.overview.substring(0, 100)}...`
        : movie.overview;
    return (
      <Card>
        <CardItem header>
          <Body>
            <Text>{movie.title}</Text>
            {full && (
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
            {movie.popularity && (
              <Text note>Popularity: {movie.popularity}</Text>
            )}
            {this.props.full && (
              <Fragment>
                <Text note>Budget: {movie.budget}</Text>
                <Text note>Revenue: {movie.revenue}</Text>
                <Text note>Status: {movie.status}</Text>
              </Fragment>
            )}
          </Body>
        </CardItem>
        {movie.poster_path !== null && (
          <CardItem>
            <Image
              style={{ height: 500, flex: 1 }}
              source={{ uri: ApiService.getPosterUrl(movie.poster_path) }}
            />
          </CardItem>
        )}
        <CardItem>
          <Text>{overview}</Text>
        </CardItem>
        {full && (
          <CardItem>
            <List
              dataArray={movie.cast}
              renderRow={person => (
                <TouchableOpacity
                  button
                  onPress={() => this.props.openPerson(person)}
                  key={person.cast_id}
                >
                  <PersonSummary person={person} asCast />
                </TouchableOpacity>
              )}
              horizontal
            />
          </CardItem>
        )}
      </Card>
    );
  }
}
