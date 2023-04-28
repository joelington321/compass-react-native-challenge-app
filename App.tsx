import { TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


interface AppProps {
  onPress: () => void; // new prop for onPress function
}

const BackButton = ({ onPress }: AppProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.backImg} source={require('./src/assets/icons/icon_back.png')} />
    </TouchableOpacity>
  );
};

export default function App() {
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
}

