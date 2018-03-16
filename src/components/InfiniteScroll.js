import React, { PureComponent } from "react";
import { List, ListItem } from "native-base";
import Container from "./LoadingContainer";

export default class InfiniteScroll extends PureComponent {
  constructor(props) {
    super(props);
    this.page = 0;
    this.state = {
      data: [],
      isLoading: true
    };
  }
  componentWillMount() {
    this.getData();
  }
  getData = async () => {
    const data = await this.props.getData(++this.page);
    this.setState(prevState => ({
      data: [...prevState.data, ...data],
      isLoading: false
    }));
  };
  onItemPress = item => {
    this.props.onItemPress(item);
  };
  render() {
    const { data, isLoading } = this.state;
    return (
      <Container isLoading={isLoading}>
        <List
          dataArray={data}
          renderRow={item => (
            <ListItem
              button
              onPress={() => this.onItemPress(item)}
              key={item.id}
            >
              {this.props.renderRow(item)}
            </ListItem>
          )}
          onEndReached={this.getData}
        />
      </Container>
    );
  }
}
