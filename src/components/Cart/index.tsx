import React, { useState } from 'react';
import { View, Image, Pressable, Text, ActivityIndicator, Alert } from 'react-native';
import { useCart } from '../../api/context';
import styles from './style';
import { StateDisplay, ProductData, icons } from '../../global/types';






function Cart() {
    const { cartItems } = useCart();




    const countItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);


    return (
        <View style={styles.container}>
            <View style={styles.cartContainer}>
              <Image source={icons.iconCart} style={styles.cartImage} />
              <Text style={styles.countNumber}>{countItemsInCart}</Text>
            </View>
        </View>
      );
    }


export default Cart;