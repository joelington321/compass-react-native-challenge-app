import { Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useCallback, useState } from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Footer from '../../components/Footer';
import PrimaryInput from '../../components/Inputs/PrimaryInput';
import styles from './style';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { icons } from '../../global/types';

interface SignupScreenProps {
    navigation: NavigationProp<ParamListBase>; // define type of navigation prop
}


const SignupScreen = ({ navigation }: SignupScreenProps) => {
    const [isChecked, setChecked] = useState<boolean>(false);
    const [checkboxError, setCheckboxError] = useState<'flex' | 'none'>('none');
    //functions to tracker the value of email input
    const [email, setEmail] = useState<string>("");
    //use of callback function for save after the email text in <primaryInput> is change
    const emailInputHandler = useCallback((text: string) => {
        setEmail(text);
    }, []);

    //functions to tracker the value of email input
    const [username, setUsername] = useState<string>("");
    //use of callback function for save after the email text in <primaryInput> is change
    const usernameInputHandler = useCallback((text: string) => {
        setUsername(text);
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
    const [usernameError, setUsernameError] = useState<boolean>(false);



    const handleSignupPress = () => {

        //verify if the fields is empty and display a error msg
        if (email !== '' && password !== '' && username !== '' && isChecked === true) {
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

            if (username === '') {
                setUsernameError(true);
            } else {
                setUsernameError(false);
            }

            if (!isChecked) {
                setCheckboxError('flex');
            } else {
                setCheckboxError('none');
            }

        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.bodyContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>SIGN UP</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <PrimaryInput icon={icons.iconEmail}
                        placeholder='Your email'
                        errorMsg='Please enter a valid email address.'
                        error={emailError}
                        value={email}
                        onChangeText={emailInputHandler} />

                    <PrimaryInput icon={icons.iconUser}
                        placeholder='Username'
                        errorMsg='Please enter a valid username.'
                        value={username}
                        error={usernameError}
                        onChangeText={usernameInputHandler} />

                    <PrimaryInput icon={icons.iconPassword}
                        placeholder='Your password'
                        errorMsg='Please enter a valid password.'
                        secureTextEntry
                        error={passwordError}
                        value={password}
                        onChangeText={passwordInputHandler} />
                    <View style={styles.termsContainer}>
                        <Checkbox color='#ffffff' value={isChecked} onValueChange={setChecked} />
                        <View style={styles.errorMsgContainer}>
                            <Text style={styles.termsText}>Agree to Terms and conditions</Text>
                            <View >
                                <Text style={[styles.errorMsg, { display: checkboxError }]}>Please accept the terms.</Text>
                            </View>
                        </View>
                    </View>
                    <PrimaryButton onPress={handleSignupPress}>CREATE ACCOUNT</PrimaryButton>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Footer
                    normalText="Already have an account? "
                    clickableText="Sign In"
                    onPress={() => navigation.navigate("LoginScreen")}
                />
            </View>

        </View>
    );
}


export default SignupScreen;

