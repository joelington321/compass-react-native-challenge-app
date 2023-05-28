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
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { icons } from '../global/types';
import colors from '../global/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
                    component={HomeTab}
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
const HomeTab = () => {
    return(
        <Tab.Navigator
        initialRouteName='HOME'
        screenOptions={{
            tabBarActiveTintColor: colors.Primary,
            headerShown: false,
            tabBarStyle:{
                position: 'absolute',
                backgroundColor: '#2D2D2D',
                borderTopWidth: 0,
            },
        }}>
            <Tab.Screen
                name='HOME'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image 
                          source={
                            focused
                              ? icons.iconHomeF
                              : icons.iconHomeBar}
                              
                             />),
                    }}
            />
            <Tab.Screen
            name='CART'
            component={CartScreen}
            options={{tabBarIcon: ({ focused, color, size }) => (
                <Image
                  source={
                    focused
                      ? icons.iconCartF
                      : icons.iconCartBar} 
                     />),
        
            }}/>
        </Tab.Navigator>
    )
}
export default AppNavigation;
