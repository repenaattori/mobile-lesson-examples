import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Styles } from './styles/Styles';


export default function App() {

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>First</Text>
      <Text style={[Styles.text, {flex: 4}]}>Second</Text>
    </View>
  );
}





