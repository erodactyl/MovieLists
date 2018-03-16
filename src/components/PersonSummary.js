import React, { PureComponent, Fragment } from "react";
import { Image } from "react-native";
import { Card, CardItem, Text, Left, Body, ListItem } from "native-base";
import ApiService from "../api/api.service";

export default class MovieSummary extends PureComponent {
  render() {
    const { person } = this.props;
    return (
      <Card>
        <CardItem header>
          <Body>
            <Text>{person.name}</Text>
            <Text note>{person.popularity}</Text>
          </Body>
        </CardItem>
        {person.profile_path !== null && (
          <CardItem>
            <Image
              style={{ height: 500, flex: 1 }}
              source={{ uri: ApiService.getPosterUrl(person.profile_path) }}
            />
          </CardItem>
        )}
      </Card>
    );
  }
}
