import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function MyView({name}){
    const img = require('../assets/favicon.png');
    return(
      <View>
        <Image source={img} />
        <Text>Hello {name}</Text>
        <Button title='SUBMIT' color={'#e97713'}/>
      </View>
    );
  }

