import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Styles, SpecialStyles } from './styles/Styles';
import Constants from 'expo-constants';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

export default function App() {

  const [numvalue, setNumvalue] = useState(0);
  const [radiovalue, setRadiovalue] = useState('fin');
  const [country, setCountry] = useState();

  const countries = [
    {name: "Finland", short: "FIN"},
    {name: "Sweden", short: "SWE"},
  ];

  return (
      <SafeAreaView style={Styles.container}>
        <NumericInput 
          value={numvalue}
          onChange={val => setNumvalue(val)}
          maxValue={10}
          minValue={-1}
          step={2}
        />
        <RadioButton.Group  
          onValueChange={val => setRadiovalue(val)}
          value={radiovalue}
        >
          <RadioSelection label={'Finland'} value={'fin'}/>
          <RadioSelection label={'Sweden'} value={'swe'}/>
          <RadioSelection label={'Denmark'} value={'den'}/>
          <RadioSelection label={'Germany'} value={'ger'}/>
        </RadioButton.Group>
        <SelectDropdown 
          data={countries}
          onSelect={val => setCountry(val)}
          defaultValueByIndex={0}
          buttonTextAfterSelection={item => item.name }
          rowTextForSelection={item => item.short}
        />
        <Text>{country.name} - {country.short}</Text>
      </SafeAreaView>
  );
}


function RadioSelection({label, value}){
  return(
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
       <RadioButton value={value}/>
       <Text>{label}</Text>
    </View>
  );
}







