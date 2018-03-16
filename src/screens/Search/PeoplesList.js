import React, { PureComponent } from "react";
import { List, ListItem, Text, Button, Content } from "native-base";
import Container from "../../components/LoadingContainer";
import PersonSummary from "../../components/PersonSummary";

export default class PeoplesList extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { name } = navigation.state.params;
    return { title: name };
  };
  constructor(props) {
    super(props);
    this.isFetching = false;
    this.page = 0;
    this.state = {
      isLoading: true,
      people: []
    };
  }
  componentWillMount() {
    this.getPeople();
  }
  getPeople = async () => {
    if (this.isFetching) return;
    this.isFetching = true;
    const people = await this.props.navigation.state.params.getPeople(
      ++this.page
    );
    this.setState(
      prevState => ({
        people: [...prevState.people, ...people],
        isLoading: false
      }),
      () => {
        this.isFetching = false;
      }
    );
  };
  openPerson = person => {
    this.props.navigation.navigate("PersonDetails", { person });
  };
  render() {
    const { people, isLoading } = this.state;
    return (
      <Container isLoading={isLoading}>
        <Content onScrollEndDrag={this.getPeople}>
          {people.map(person => (
            <ListItem
              button
              onPress={() => this.openPerson(person)}
              key={person.id}
            >
              <PersonSummary person={person} />
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}
