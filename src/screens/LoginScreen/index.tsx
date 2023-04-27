import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Footer from '../../components/Footer';
import PrimaryInput from '../../components/Inputs/PrimaryInput';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTest}>WELCOME</Text>
          </View>
          <View style={styles.inputsContainer}>
            <PrimaryInput icon={require('../../assets/icons/icon_mail.png')} placeholder='Your email' errorMsg='Please enter a valid email address.'></PrimaryInput>
            <PrimaryInput icon={require('../../assets/icons/icon_lock.png')} placeholder='Your password' errorMsg='Please enter a valid password.' secureTextEntry></PrimaryInput>
            <PrimaryButton>LOGIN</PrimaryButton>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Footer >Don't have an account?  Sign Up</Footer>
        </View>
      </View>
    );
  }
}


export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  inputsContainer: {
    flex: 6,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTest: {
    color: '#D78f3C',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textInput: {
    color: '#656262',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 2,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
  }
});



