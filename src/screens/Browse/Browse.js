import { StackNavigator } from "react-navigation";
import GenresList from "./GenresList";
import MoviesList from "../Shared/MoviesList";
import MovieDetails from "../Shared/MovieDetails";
import PersonDetails from "../Shared/PersonDetails";

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
  },
  PersonDetails: {
    screen: PersonDetails
  }
});
