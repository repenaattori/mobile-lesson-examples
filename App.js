import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Styles} from './styles/Styles';
import { MD3LightTheme, MD3DarkTheme, Provider, Text, TextInput, Button, IconButton, configureFonts } from 'react-native-paper';
import { useState } from 'react';


const fontConfig = {
  // headlineLarge:{
  //   fontFamily: 'monospace',
  //   fontSize: 32
  // }
  fontFamily: 'monospace'
}

const MyTheme = {
  ...MD3LightTheme,
  fonts: configureFonts({config: fontConfig}),
  colors:{
    ...MD3LightTheme.colors,
    primaryContainer: '#ffa914',
    myColor: '#b1ff51'
  },
  roundness: 5
}



export default function App() {
  const [username,setUsername] = useState('');

  return (
    <Provider theme={MyTheme}>
      <SafeAreaView style={Styles.container}>
        <Text variant='headlineLarge'>This is material design</Text>
        <TextInput 
          label='Username'
          value={username}
          onChangeText={t => setUsername(t)}
          mode='flat'
          right={<TextInput.Icon icon='account' iconColor='red'/>}
        />
        <Button
          style={{margin: 10, backgroundColor: MyTheme.colors.myColor}}
          mode='elevated'
          onPress={()=>console.log('Button pressed')}
          icon='camera'
          size={40}
        >Submit</Button>
    
      </SafeAreaView>
    </Provider>
  );
}







