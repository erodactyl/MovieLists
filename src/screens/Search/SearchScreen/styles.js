import { StyleSheet } from "react-native";
import { colors } from "../../../utils";

export default StyleSheet.create({
  container: { justifyContent: "center" },
  searchBar: { marginBottom: 40 },
  searchButtons: { justifyContent: "space-around", flexDirection: "row" },
  button: { backgroundColor: colors.primary }
});
