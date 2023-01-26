import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Styles, SpecialStyles } from './styles/Styles';
import Constants from 'expo-constants';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import DATA from './Data';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default function App() {

  const [persons, setPersons] = useState(DATA);

  return (
      <SafeAreaView style={Styles.container}>
          <AntDesign name="pausecircle" size={60} color="red" onPress={()=>console.log("hello")}/>
          <FlatList
            data={persons}
            renderItem={ ({item}) => <Item  item={item}/> }
          />
      </SafeAreaView>
  );
}


function Item({item}){
  return(
    <Text style={{padding: 50, borderWidth:1, margin: 5}}>{item.fname} {item.lname}</Text> 
  );
}






