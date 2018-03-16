import { StackNavigator } from "react-navigation";
import GenresList from "./GenresList";
import { MoviesList, MovieDetails, PersonDetails } from "../Shared";

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
