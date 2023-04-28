import { Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Footer from '../../components/Footer';
import PrimaryInput from '../../components/Inputs/PrimaryInput';
import styles from './style';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface LoginScreenProps {
  navigation: NavigationProp<ParamListBase>; // define type of navigation prop
}


const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>WELCOME</Text>
        </View>
        <View style={styles.inputsContainer}>
          <PrimaryInput icon={require('../../assets/icons/icon_mail.png')} placeholder='Your email' errorMsg='Please enter a valid email address.'></PrimaryInput>
          <PrimaryInput icon={require('../../assets/icons/icon_lock.png')} placeholder='Your password' errorMsg='Please enter a valid password.' secureTextEntry></PrimaryInput>
          <PrimaryButton onPress={() => navigation.navigate("HomeScreen")}>LOGIN</PrimaryButton>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Footer
          normalText="Don't have an account? "
          clickableText="Sign Up"
          onPress={() => navigation.navigate("SignupScreen")}
        />
      </View>
    </View>
  );
}


export default LoginScreen;





