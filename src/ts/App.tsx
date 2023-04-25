import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as Font from 'expo-font';


export default function App() {
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.textTest}>WELCOME</Text>
      <Text style={styles.textInput}>First Setup of the APP.</Text>
      
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
    fontFamily: 'Khula'
  },
  textInput:{
    color: '#656262'
  }
});


async function loadFonts() {
  await Font.loadAsync({
    'Khula': require('../../assets/fonts/Khula-Regular.ttf'),
  });
}