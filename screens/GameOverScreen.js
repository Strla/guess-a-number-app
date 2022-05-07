import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Igra je gotova!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      {props.navigation.getParam("genNumber") &&
      props.navigation.getParam("numOfRounds") ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Trebalo ti je{" "}
            <Text style={styles.highlight}>
              {props.navigation.getParam("numOfRounds")}
            </Text>{" "}
            pokušaja da pogodiš broj{" "}
            <Text style={styles.highlight}>
              {props.navigation.getParam("genNumber")}
            </Text>
          </Text>
        </View>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Tvojem mobitelu je trebalo{" "}
            <Text style={styles.highlight}>
              {props.navigation.getParam("guessLength")}
            </Text>{" "}
            pokušaja da pogodi broj{" "}
            <Text style={styles.highlight}>
              {props.navigation.getParam("userNumber")}
            </Text>
          </Text>
        </View>
      )}
      <MainButton onPress={() => props.navigation.popToTop()}>
        NOVA IGRA
      </MainButton>
    </View>
  );
};

GameOverScreen.navigationOptions = () => {
  return {
    headerLeft: () => null,
    headerTitle: "Kraj igre",
    headerTintColor: Colors.primary,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
