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
    screen: MoviesList
  },
  MovieDetails: {
    screen: MovieDetails
  }
});
