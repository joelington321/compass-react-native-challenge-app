import { Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Footer from '../../components/Footer';
import PrimaryInput from '../../components/Inputs/PrimaryInput';
import styles from './style';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface SignupScreenProps {
    navigation: NavigationProp<ParamListBase>; // define type of navigation prop
}

const SignupScreen = ({ navigation }: SignupScreenProps) => {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.bodyContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>SIGN UP</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <PrimaryInput icon={require('../../assets/icons/icon_mail.png')} placeholder='Your email' errorMsg='Please enter a valid email address.' />
                    <PrimaryInput icon={require('../../assets/icons/icon_user.png')} placeholder='Username' errorMsg='Please enter a valid username.' />
                    <PrimaryInput icon={require('../../assets/icons/icon_lock.png')} placeholder='Your password' errorMsg='Please enter a valid password.' secureTextEntry />
                    <View style={styles.termsContainer}>
                        <Checkbox color='#ffffff' value={isChecked} onValueChange={setChecked} />
                        <View style={styles.errorMsgContainer}>
                            <Text style={styles.termsText}>Agree to Terms and conditions</Text>
                            <View>
                                <Text style={styles.errorMsg}>Please accept the terms.</Text>
                            </View>
                        </View>
                    </View>
                    <PrimaryButton onPress={() => navigation.navigate("HomeScreen")}>CREATE ACCOUNT</PrimaryButton>
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

