import React, { useState } from 'react';
import { View, Image, Pressable, Text, ActivityIndicator, Alert } from 'react-native';
import { RouteProp, NavigationProp, ParamListBase } from '@react-navigation/native';
import { useCart } from '../../api/context';
import styles from './style';
import Product from '../../components/Item/Product';
import { StateDisplay, ProductData, icons } from '../../global/types';



type ProductDetailsRouteProp = RouteProp<ParamListBase, 'ProductDetailsScreen'>;

interface ProductDetailsScreenProps {
    route: ProductDetailsRouteProp;
    navigation: NavigationProp<ParamListBase>;
}

function ProductDetailsScreen({ route, navigation }: ProductDetailsScreenProps) {
    const { item } = route.params as { item: ProductData };
    const { addToCart, cartItems } = useCart();
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    const [amount, setAmount] = useState<number>(existingCartItem ? existingCartItem.quantity : 1);
    const [isLoading, setIsLoading] = useState(false);


    const onPressCart = () => {
        navigation.navigate('CartScreen');
    };

    const handleAddToCart = () => {
        setIsLoading(true);
        // Adicione o item ao carrinho
        addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: amount,
        });

        setTimeout(() => {
            setIsLoading(false);
            Alert.alert('Good!', 'Product added to cart!');
        }, 3000);
    };

    return (
        <View style={styles.container}>
          <Pressable onPress={onPressCart}>
            <View style={styles.cartContainer}>
              <Image source={icons.iconCart} style={styles.cartImage} />
            </View>
          </Pressable>
          <View style={styles.productContainer}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#000000" />
            ) : (
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rate={item.rating.rate}
                count={item.rating.count}
                state={StateDisplay.Info}
                onAddToCart={handleAddToCart}
                amount={amount}
              />
            )}
          </View>
        </View>
      );
    }


export default ProductDetailsScreen;