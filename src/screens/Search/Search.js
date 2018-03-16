import { StackNavigator } from "react-navigation";
import SearchScreen from "./SearchScreen";
import MoviesList from "../Shared/MoviesList";
import PeoplesList from "./PeoplesList";
import MovieDetails from "../Shared/MovieDetails";
import PersonDetails from "../Shared/PersonDetails";

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: { header: null, title: "Search" }
  },
  MoviesList: {
    screen: MoviesList
  },
  PeoplesList: {
    screen: PeoplesList
  },
  MovieDetails: {
    screen: MovieDetails
  },
  PersonDetails: {
    screen: PersonDetails
  }
});
