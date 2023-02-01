import { StyleSheet } from "react-native";
import  Constants from "expo-constants";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      margin: 20,
    },

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