import { TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/index';
import CartScreen from '../screens/CartScreen';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { icons } from '../global/types';
import CartProvider from '../contexts/CartContext'

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
            <CartProvider>
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
                        options={({route, navigation}) => ({
                            headerTitle: '',
                            headerTransparent: true,
                        })}
                        />
                        <Stack.Screen
                        name="CartScreen"
                        component={CartScreen}
                        />
                </Stack.Navigator>
            </CartProvider>

        </NavigationContainer>
    );
};

export default AppNavigation;
