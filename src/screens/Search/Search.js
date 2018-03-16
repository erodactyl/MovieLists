import { StackNavigator } from "react-navigation";
import SearchScreen from "./SearchScreen";
import MoviesList from "../Shared/MoviesList";
import PeoplesList from "./PeoplesList";
import MovieDetails from "../Shared/MovieDetails";
import PersonDetails from "./PersonDetails";

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: { header: null, title: "Search" }
  },
  MoviesList: {
    screen: MoviesList
  },
  PeoplesList: {
    screen: PeoplesList,
    navigationOptions: { title: "Peoples List" }
  },
  MovieDetails: {
    screen: MovieDetails
  },
  PersonDetails: {
    screen: PersonDetails,
    navigationOptions: { title: "Person Details" }
  }
});
