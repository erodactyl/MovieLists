import React, { PureComponent } from "react";
import MovieSummary from "../../components/MovieSummary";
import InfiniteScroll from "../../components/InfiniteScroll";

export default class MoviesList extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.name
    };
  };
  openMovie = movie => {
    this.props.navigation.navigate("MovieDetails", {
      movie
    });
  };
  render() {
    return (
      <InfiniteScroll
        getData={this.props.navigation.state.params.getMovies}
        renderRow={movie => <MovieSummary movie={movie} brief />}
        onItemPress={movie => this.openMovie(movie)}
      />
    );
  }
}
