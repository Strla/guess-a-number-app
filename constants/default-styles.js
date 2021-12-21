import { Platform, StyleSheet } from "react-native";
import Colors from "./colors";

export default StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: Platform.OS === "ios" ? Colors.primary : "white",
  },
});
