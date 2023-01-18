import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Styles, SpecialStyles } from './styles/Styles';
import Constants from 'expo-constants';

export default function App() {

  const [on, setOn] = useState(false);

  const text = on ? "Button is on" : "Button is off";

  return (
      <SafeAreaView style={Styles.container}>
        <Text>{text}</Text>
        <Switch
          value={on}
          onValueChange={() => setOn(!on) }
          thumbColor={Styles.mySwitchButtonColor}
          trackColor={Styles.myTrackColors}
          style={{transform: [{scale: 1.2}]}}
        />
      </SafeAreaView>
    
  );
}







