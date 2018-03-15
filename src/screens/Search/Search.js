import { StackNavigator } from "react-navigation";
import SearchScreen from "./SearchScreen";
import MoviesList from "../Shared/MoviesList";
import PeoplesList from "./PeoplesList";
import MovieDetails from "../Shared/MovieDetails";
import PersonDetails from "./PersonDetails";

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: { title: "Search Screen" }
  },
  MoviesList: {
    screen: MoviesList,
    navigationOptions: { title: "Movies List" }
  },
  PeoplesList: {
    screen: PeoplesList,
    navigationOptions: { title: "Peoples List" }
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: { title: "Movie Details" }
  },
  PersonDetails: {
    screen: PersonDetails,
    navigationOptions: { title: "Person Details" }
  }
});
