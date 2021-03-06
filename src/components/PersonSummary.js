import React, { PureComponent, Fragment } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Body, List } from "native-base";
import { MovieSummary } from "../components";
import styles from "./styles";

import { ApiService } from "../api";

export default class PersonSummary extends PureComponent {
  render() {
    const { person, asCast, full } = this.props;
    return (
      <Card>
        <CardItem header>
          <Body>
            <Text>{person.name}</Text>
            {asCast ? <Text note>{person.character}</Text> : null}
            {person.popularity ? (
              <Text note>Popularity: {person.popularity}</Text>
            ) : null}
            {full ? (
              <Fragment>
                {person.birthday && <Text note>Birth: {person.birthday}</Text>}
                {person.deathday && <Text note>Death: {person.deathday}</Text>}
                {person.place_of_birth && (
                  <Text note>Place of birth: {person.place_of_birth}</Text>
                )}
              </Fragment>
            ) : null}
          </Body>
        </CardItem>
        {person.profile_path ? (
          <CardItem>
            <Image
              style={[styles.image, { width: asCast ? 200 : null }]}
              source={{ uri: ApiService.getPosterUrl(person.profile_path) }}
            />
          </CardItem>
        ) : null}
        {full ? (
          <CardItem>
            <Text>{person.biography}</Text>
          </CardItem>
        ) : null}
        {full ? (
          <CardItem>
            <List
              dataArray={person.movies}
              renderRow={movie => (
                <TouchableOpacity
                  button
                  onPress={() => this.props.openMovie(movie)}
                  key={movie.id}
                >
                  <MovieSummary movie={movie} fromPerson />
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
