import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import MainButton from "../../components/MainButton";
import Colors from "../../constants/colors";

const generateRandomNumber = (min, max) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
};

const StartGameScreenUser = (props) => {
  const [genNumber, setGenNumber] = useState();

  useEffect(() => {
    setGenNumber(generateRandomNumber(1, 99));
  }, [setGenNumber]);

  return (
    <View style={styles.screen}>
      {genNumber ? (
        <View style={styles.content}>
          <Text style={styles.title}>Mobitel je generirao broj!</Text>
          <MainButton
            onPress={() =>
              props.navigation.navigate({
                routeName: "GameUser",
                params: {
                  genNumber: genNumber,
                },
              })
            }
          >
            POKRENI IGRU
          </MainButton>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Generiram...</Text>
        </View>
      )}
    </View>
  );
};

StartGameScreenUser.navigationOptions = () => {
  return {
    headerTitle: "Korisnik pogađa",
    headerTintColor: Colors.primary,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  title: {
    color: Colors.accent,
    fontSize: 20,
    marginVertical: 50,
    fontFamily: "open-sans-bold",
  },
});

export default StartGameScreenUser;
