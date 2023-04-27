import { TextInput,Text, View,StyleSheet} from 'react-native';
import React, {Component} from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Footer from '../../components/Footer';

class LoginScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
              <View style={styles.bodyContainer}>
                <Text style={styles.textTest}>WELCOME</Text>
                <TextInput/>
                <TextInput/>
                <PrimaryButton>Login</PrimaryButton>
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
    flex : 1,
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTest:{
    color: '#D78f3C',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textInput:{
    color: '#656262'
  },
  footerContainer:{
    flex:2,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  bodyContainer:{
    flex:10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});



