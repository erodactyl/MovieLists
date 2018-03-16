import React, { PureComponent } from "react";
import { PersonSummary, InfiniteScroll } from "../../components";

export default class PeoplesList extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { name } = navigation.state.params;
    return { title: name };
  };
  openPerson = person => {
    this.props.navigation.navigate("PersonDetails", { person });
  };
  render() {
    return (
      <InfiniteScroll
        getData={this.props.navigation.state.params.getPeople}
        renderRow={person => <PersonSummary person={person} />}
        onItemPress={person => this.openPerson(person)}
      />
    );
  }
}
