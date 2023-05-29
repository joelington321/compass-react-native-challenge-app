import { Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Footer from '../../components/Footer';
import PrimaryInput from '../../components/Inputs/PrimaryInput';
import styles from './style';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { icons } from '../../global/types';

interface LoginScreenProps {
  navigation: NavigationProp<ParamListBase>;
}



const LoginScreen = ({ navigation }: LoginScreenProps) => {


  //functions to tracker the value of email input
  const [email, setEmail] = useState<string>("");
  //use of callback function for save after the email text in <primaryInput> is change
  const emailInputHandler = useCallback((text: string) => {
    setEmail(text);
  }, []);


  //functions to tracker the value of password input
  const [password, setPassword] = useState<string>("");
  //use of callback function for save after the password text in <primaryInput> is change
  const passwordInputHandler = useCallback((text: string) => {
    setPassword(text);
  }, []);

  //instantiate the values of errors verify
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleLoginPress = () => {

    //verify if the fields is empty and display a error msg
    if (email !== '' && password !== '') {
      navigation.navigate("HomeScreen", { email });
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
