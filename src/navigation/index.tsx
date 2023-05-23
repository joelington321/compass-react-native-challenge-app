import { TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

interface BackButtonProps {
    onPress: () => void;
}

const BackButton = ({ onPress }: BackButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.backImg} source={require('../assets/icons/icon_back.png')} />
        </TouchableOpacity>
    );
};

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <BackButton onPress={() => navigation.goBack()} />
                        ),
                        headerTitle: '',
                        headerTransparent: true,
                    })}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
