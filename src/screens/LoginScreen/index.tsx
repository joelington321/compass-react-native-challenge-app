import { Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Footer from '../../components/Footer';
import PrimaryInput from '../../components/Inputs/PrimaryInput';
import styles from './style';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface LoginScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const icons = {
  iconEmail: require('../../assets/icons/icon_mail.png'),
  iconPassword: require('../../assets/icons/icon_lock.png'),
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {


  //functions to tracker the value of email input
  const [email, setEmail] = useState("");
  const emailInputHandler = useCallback((text: string) => {
    setEmail(text);
  }, []);


  //functions to tracker the value of password input
  const [password, setPassword] = useState("");
  const passwordInputHandler = useCallback((text: string) => {
    setPassword(text);
  }, []);

  //instantiate the values of errors verify
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(Boolean);

  const handleLoginPress = () => {

    if (email !== '' && password !== '') {
      console.log('Navigating to HomeScreen');
      navigation.navigate("HomeScreen");
    } else {
      if (email === '') {
        setEmailError(true);
      } else {
        setEmailError(false);
      }

      if (password === '') {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
    console.log("emailError ==== " + emailError);
    console.log("passwordError ==== " + passwordError);
  }



  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>WELCOME</Text>
        </View>
        <View style={styles.inputsContainer}>
          <PrimaryInput
            icon={icons.iconEmail}
            placeholder='Your email'
            errorMsg='Please enter a valid email address.'
            error={emailError}
            value={email}
            onChangeText={emailInputHandler}
          />
          <PrimaryInput
            icon={icons.iconPassword}
            placeholder='Your password'
            errorMsg='Please enter a valid password.'
            error={passwordError}
            value={password}
            secureTextEntry
            onChangeText={passwordInputHandler}
          />
          <PrimaryButton onPress={handleLoginPress}>LOGIN</PrimaryButton>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Footer
          normalText="Don't have an account? "
          clickableText="Sign Up"
          onPress={() => navigation.navigate("SignupScreen")}
        />
      </View>
    </View >
  );
}

export default LoginScreen;
