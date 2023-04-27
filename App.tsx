
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';


export default function App() {
  
  return (
    
    <View style={styles.viewApp}>
      
      <LoginScreen/>
    
    </View>
  );
}


const styles = StyleSheet.create({
  viewApp: {
    flex : 1
  }
});

