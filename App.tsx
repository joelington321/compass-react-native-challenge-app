
import { StyleSheet, View } from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';


export default function App() {

  return (

    <View style={styles.viewApp}>

      <SignupScreen />


    </View>
  );
}


const styles = StyleSheet.create({
  viewApp: {
    flex: 1
  }
});

