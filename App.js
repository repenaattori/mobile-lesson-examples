import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Styles, SpecialStyles } from './styles/Styles';
import Constants from 'expo-constants';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

let namelist = ["Reima", "Lisa", "Matt"];

export default function App() {

  const [names, setNames] = useState([...namelist, ...namelist, ...namelist]);

  return (
      <SafeAreaView style={Styles.container}>
        <FlatList
          data={names}
          renderItem={ Item }
        />
      </SafeAreaView>
  );
}


function Item({item}){
  return(
    <Text style={{padding: 50, borderWidth:1, margin: 5}}>{item}</Text> 
  );
}






