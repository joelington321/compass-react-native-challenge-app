import React from 'react';
import { TextInput, Text, View, Image } from 'react-native';
import styles from './style';

interface PrimaryInputProps {
    placeholder: string;
    errorMsg: string;
    secureTextEntry?: boolean;
    icon?: any;
}


//primary entry takes placeholder, error message and icon reference, securityTextEntry is optional the default is false.
const PrimaryInput = ({ placeholder, errorMsg, secureTextEntry, icon, ...props }: PrimaryInputProps) => {
    return (
        <View style={styles.primaryInputContainer}>
            <View style={styles.inputBackground}>
                {icon && <Image source={icon} style={styles.icon} />}
                <TextInput
                    style={{ flex: 1 }}
                    placeholder={placeholder}
                    placeholderTextColor={'#a8a8a8'}
                    secureTextEntry={secureTextEntry}
                    {...props}
                />
            </View>
            <View>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
            </View>
        </View>
    );
};

export default PrimaryInput;






