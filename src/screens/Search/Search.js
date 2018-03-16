import { StackNavigator } from "react-navigation";
import SearchScreen from "./SearchScreen";
import PeoplesList from "./PeoplesList";
import { MoviesList, MovieDetails, PersonDetails } from "../Shared";

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: { title: "Search" }
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
