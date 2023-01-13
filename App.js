import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import MyView from './components/MyView';

export default function App() {

  const [text, setText] = useState('');  

  const x = '0';

  Number(x) + Number(x)

  function pressed(){
    console.log('Text is pressed');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={text} 
        onChangeText={(t)=> setText(t)} 
      />
      <Pressable onPress={pressed}>
        <Image source={require('./assets/favicon.png')}/>
      </Pressable>
      <Text>You're name is {text}</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
