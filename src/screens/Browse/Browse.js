import { StackNavigator } from "react-navigation";
import GenresList from "./GenresList";
import MoviesList from "../Shared/MoviesList";
import MovieDetails from "../Shared/MovieDetails";

export default StackNavigator({
  GenresList: {
    screen: GenresList,
    navigationOptions: { title: "Genres List" }
  },
  MoviesList: {
    screen: MoviesList,
    navigationOptions: { title: "Movies List" }
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: { title: "Movie Details" }
  }
});
