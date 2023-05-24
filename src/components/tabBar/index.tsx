import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
/*import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';*/
import { styles } from './style';

const TabBar: React.FC = () => {
  /*const Stack = createStackNavigator();*/

  const renderTabBarButton = (
    imageSource: any,
    text: string,
    routeName: string
  ) => {
    const handlePress = () => {
      /*navigation.navigate(routeName);*/
    };

    return (
      <TouchableOpacity onPress={handlePress} style={styles.tabContainer}>
        <Image source={imageSource} style={styles.tabImage} />
        <Text style={styles.tabText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    /*<NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>*/
        <View style={styles.tabBar}>        
          {renderTabBarButton(require('../../assets/icons/icon_home-alt'), 'HOME', 'Home')}
          {renderTabBarButton(require('../../assets/icons/icon_cart-alt'), 'CART', 'Cart')}
        </View>
      /*</View>*/
    /*</NavigationContainer>*/
  );
};

export default TabBar;