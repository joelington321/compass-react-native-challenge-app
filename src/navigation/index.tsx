import { TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen/index';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { icons } from '../global/types';

const Stack = createStackNavigator();

interface BackButtonProps {
    onPress: () => void;
}

const BackButton = ({ onPress }: BackButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.backImg} source={icons.iconBack} />
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
                <Stack.Screen
                    name="ProductDetailsScreen"
                    component={ProductDetailsScreen}
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <BackButton onPress={() => navigation.goBack()} />
                        ),
                        headerTitle: '',
                        headerTransparent: true,
                    })}
                />
                <Stack.Screen
                    name="CartScreen"
                    component={CartScreen}
                    options={{
                        headerTitle: '',
                        headerTransparent: true,
                        headerLeft: () => null, // Remove the back button
                    }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default AppNavigation;
