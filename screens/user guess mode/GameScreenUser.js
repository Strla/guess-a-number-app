import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../../components/Card";
import Input from "../../components/Input";
import DefaultStyles from "../../constants/default-styles";
import Colors from "../../constants/colors";

const GameScreenUser = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [textOutput, setTextOutput] = useState("");
  const [rounds, setRounds] = useState(0);

  const genNumber = props.navigation.getParam("genNumber");

  useEffect(() => {
    if (selectedNumber < genNumber) {
      setTextOutput("VEĆI");
    } else if (selectedNumber > genNumber) {
      setTextOutput("MANJI");
    } else if (selectedNumber === genNumber) {
      props.navigation.navigate({
        routeName: "GameOverScreen",
        params: {
          genNumber: genNumber,
          numOfRounds: rounds,
        },
      });
    }
  }, [selectedNumber]);

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Neispravan broj!", "Broj mora biti između 1 i 99", [
        { text: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setSelectedNumber(chosenNumber);
    setRounds(rounds + 1);
    setEnteredValue("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.response}>
          {selectedNumber && (
            <Text style={styles.warning}>Broj koji pogađaš je </Text>
          )}
          {textOutput}
        </Text>
        <Card style={styles.inputContainer}>
          <Text style={DefaultStyles.bodyText}>Unesi Broj:</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Potvrdi"
                onPress={confirmInputHandler}
                color={Colors.accent}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

GameScreenUser.navigationOptions = () => {
  return {
    headerLeft: () => null,
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
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  button: {
    width: "50%",
    backgroundColor: "#f7e6fc",
    borderRadius: 8,
    marginTop: 20,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  response: {
    fontSize: 25,
    color: Colors.primary,
    marginBottom: 30,
  },
  warning: {
    fontSize: 20,
    color: Colors.accent,
  },
});

export default GameScreenUser;
