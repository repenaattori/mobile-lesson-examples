import { StyleSheet } from "react-native";
import  Constants from "expo-constants";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'yellow',
      marginTop: Constants.statusBarHeight
    },
    text:{
      backgroundColor: '#ebac0e',
      borderWidth: 1,
      borderRadius: 5,
      width: 200,
      height: 100
    },
    mySwitchButtonColor: '#0593ff',
    myTrackColors: {
      false: 'white', 
      true: 'brown'
    }
});

const SpecialStyles = StyleSheet.create({
  container: {
    ...Styles.container,
    backgroundColor: '#0055ab'
  },
  text:{
    ...Styles.text,
    backgroundColor: 'white'
  }
});

export {Styles, SpecialStyles};