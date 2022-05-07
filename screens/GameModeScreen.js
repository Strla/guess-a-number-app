import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const GameModeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Modovi igre</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <MainButton
            onPress={() =>
              props.navigation.navigate({
                routeName: "MobileGuess",
              })
            }
          >
            Mobitel pogađa
          </MainButton>
        </View>
        <View style={styles.button}>
          <MainButton
            onPress={() =>
              props.navigation.navigate({
                routeName: "UserGuess",
              })
            }
          >
            Korisnik pogađa
          </MainButton>
        </View>
      </View>
    </View>
  );
};

GameModeScreen.navigationOptions = () => {
  return {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "black",
    headerTitle: "Pogađanje Broja",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 40,
    fontFamily: "open-sans-bold",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginVertical: 10,
  },
});

export default GameModeScreen;
