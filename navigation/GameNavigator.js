import GameModeScreen from "../screens/GameModeScreen";
import GameOverScreen from "../screens/GameOverScreen";
import StartGameScreenMobile from "../screens/mobile guess mode/StartGameScreenMobile";
import GameScreenMobile from "../screens/mobile guess mode/GameScreenMobile";
import StartGameScreenUser from "../screens/user guess mode/StartGameScreenUser";
import GameScreenUser from "../screens/user guess mode/GameScreenUser";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const defaultStackNavOptions = {
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitle: "Modovi",
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  gestureEnabled: false,
};

const GameNavigator = createStackNavigator(
  {
    GameMode: {
      screen: GameModeScreen,
    },
    GameOverScreen: {
      screen: GameOverScreen,
    },
    MobileGuess: {
      screen: StartGameScreenMobile,
    },
    UserGuess: {
      screen: StartGameScreenUser,
    },
    GameMobile: {
      screen: GameScreenMobile,
    },
    GameUser: {
      screen: GameScreenUser,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

export default createAppContainer(GameNavigator);
