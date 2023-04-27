import React from 'react';
import { TextInput, Text, View, StyleSheet, Image } from 'react-native';

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

const styles = StyleSheet.create({
    primaryInputContainer: {
        padding: 5,
        height: 90,
    },
    errorMsg: {
        margin: 3,
        display: 'flex',
        justifyContent: 'flex-start',
        color: '#FF4B4B',
        fontSize: 12,
        paddingLeft: 15,

    },
    inputBackground: {
        backgroundColor: '#656262',
        borderRadius: 25,
        justifyContent: 'flex-start',
        width: 370,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderColor: '#FF4B4B',
        borderWidth: 1
    },
    icon: {
        width: 18,
        height: 24,
        marginRight: 8
    }
});







/*
const styles = StyleSheet.create({
    errorMsg: {
        margin: 3,
        display: 'flex',
        justifyContent: 'flex-start',
        color: '#FF4B4B',
        fontSize: 12
    },
    inputBackground: {
        backgroundColor: '#656262',
        borderRadius: 25,
        justifyContent: 'center',
        width: 375,
        height: 55,
        // paddingBottom: '10'
    }
});*/