import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from './src/components/Buttons/PrimaryButton.js';


export default function App() {
  
  return (
    
    <View style={styles.container}>
      
      <Text style={styles.textTest}>WELCOME</Text>
      
      <PrimaryButton title={'LOGIN'} onPress={function (): void {
        throw new Error('Function not implemented.');
      } }></PrimaryButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTest:{
    color: '#D78f3C',
    fontSize: 50,
    fontWeight: 'bold',
  },
  textInput:{
    color: '#656262'
  }
});


