import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Styles, SpecialStyles } from './styles/Styles';
import Constants from 'expo-constants';
import DATA from './Data';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export default function App() {

  const [persons, setPersons] = useState(DATA);
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState();

  function search(keyword){
    setText(keyword);
    const filteredPersons = DATA.filter(p => p.fname.includes(keyword));
    setPersons(filteredPersons);
  }

  return (
      <SafeAreaView style={Styles.container}>
          <TextInput style={{borderWidth:1, padding: 5}} value={text} onChangeText={search}/>
          <FlatList
            data={persons}
            renderItem={ ({item}) => <Item  item={item} selectedId={selectedId} select={setSelectedId}/> }
          />
      </SafeAreaView>
  );
}


function Item({item, selectedId, select}){

  const color = selectedId == item.id ? 'orange' : 'yellow';

  return(
    <Pressable onPress={()=> select(item.id)}>
      <Text style={{padding: 50, borderWidth:1, margin: 5, backgroundColor: color}}>{item.fname} {item.lname}</Text> 
    </Pressable>
  );
}






