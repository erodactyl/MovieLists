import React from "react";
import { TabNavigator } from "react-navigation";
import { Icon } from "native-base";
import BrowseScreen from "./Browse";
import SearchScreen from "./Search";
import { colors } from "../utils";

export default TabNavigator(
  {
    Browse: {
      screen: BrowseScreen,
      navigationOptions: { title: "Browse" }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: { title: "Search" }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Browse") {
          iconName = `md-film`;
        } else if (routeName === "Search") {
          iconName = `md-search`;
        }
        return (
          <Icon
            name={iconName}
            style={{ color: focused ? colors.primary : colors.disabled }}
          />
        );
      }
    }),
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
);
