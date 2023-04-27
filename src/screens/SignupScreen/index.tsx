import { Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Footer from '../../components/Footer';
import PrimaryInput from '../../components/Inputs/PrimaryInput';
import styles from './style';


const SignupScreen = () => {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.bodyContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>WELCOME</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <PrimaryInput icon={require('../../assets/icons/icon_mail.png')} placeholder='Your email' errorMsg='Please enter a valid email address.' />
                    <PrimaryInput icon={require('../../assets/icons/icon_user.png')} placeholder='Username' errorMsg='Please enter a valid username.' secureTextEntry />
                    <PrimaryInput icon={require('../../assets/icons/icon_lock.png')} placeholder='Your password' errorMsg='Please enter a valid password.' secureTextEntry />
                    <View style={styles.termsContainer}>
                        <Checkbox color='#ffffff' value={isChecked} onValueChange={setChecked} />
                        <Text style={styles.termsText}>Agree to Terms and conditions</Text>
                    </View>
                    <PrimaryButton>CREATE ACCOUNT</PrimaryButton>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Footer >Already have an account?  Sign In</Footer>
            </View>
        </View>
    );
}


export default SignupScreen;

