import React, { PureComponent, Fragment } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Body, List } from "native-base";
import { PersonSummary } from "../components";
import styles from "./styles";

import { ApiService } from "../api";

export default class MovieSummary extends PureComponent {
  render() {
    const { movie, brief, full, fromPerson } = this.props;
    return (
      <Card>
        <CardItem header>
          <Body>
            <Text>{movie.title}</Text>
            {full ? (
              <Text note>
                {movie.genres
                  .reduce((acc, genre) => `${acc}, ${genre.name}`, "")
                  .substring(2)}
              </Text>
            ) : null}
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text note>Release Date: {movie.release_date}</Text>
            {movie.popularity ? (
              <Text note>Popularity: {movie.popularity}</Text>
            ) : null}
            {this.props.full && (
              <Fragment>
                <Text note>Budget: {movie.budget}</Text>
                <Text note>Revenue: {movie.revenue}</Text>
                <Text note>Status: {movie.status}</Text>
              </Fragment>
            )}
          </Body>
        </CardItem>
        {movie.poster_path ? (
          <CardItem>
            <Image
              style={[styles.image, { width: fromPerson ? 200 : null }]}
              source={{ uri: ApiService.getPosterUrl(movie.poster_path) }}
            />
          </CardItem>
        ) : null}
        {!fromPerson ? (
          <CardItem>
            <Text>
              {brief && movie.overview.length > 100
                ? `${movie.overview.substring(0, 100)}...`
                : movie.overview}
            </Text>
          </CardItem>
        ) : null}
        {full ? (
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
        ) : null}
      </Card>
    );
  }
}
