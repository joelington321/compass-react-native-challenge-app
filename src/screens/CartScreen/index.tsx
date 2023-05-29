import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useCart } from '../../api/context';
import styles from './style';
import Product from '../../components/Item/Product';
import { ProductData, StateDisplay } from '../../global/types';
import { fetchProducts } from '../../api/storeapi';
import { AxiosResponse } from 'axios';
import { NavigationProp, ParamListBase } from '@react-navigation/native';


interface CartScreenProp {
    navigation: NavigationProp<ParamListBase>;
}


function CartScreen({ navigation }: CartScreenProp) {
    const { cartItems, removeFromCart } = useCart();
    const [products, setProducts] = useState<ProductData[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const fetchedProducts: AxiosResponse<ProductData[]> = await fetchProducts();
                setProducts(fetchedProducts.data);

            } catch (error) {
                console.log('Error fetching products:', error);
            }
        };

        getProducts();
    }, []);

    const onPressProduct = (item: ProductData) => {
        navigation.navigate('ProductDetailsScreen', { item });
    };

    const handleBuyButtonPress = () => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          Alert.alert('Good!', 'Product sucessfully purchased.');
        }, 3000);
      };


    // Calcule o total do carrinho
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const renderProduct = ({ item }: { item: ProductData }) => {      
        const cartItem = cartItems.find((cartItem) => 
                cartItem.id === item.id);
                
        if (!cartItem) {
            return null;
        }


        return (
            <TouchableOpacity onPress={() => onPressProduct(item)}>
                <Product
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    rate={item.rating.rate}
                    count={item.rating.count}
                    state={StateDisplay.Cart}
                    removeFromCart={removeFromCart}
                />
            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.totalTextContainer}>
                    <Text style={styles.totalText}>TOTAL</Text>
                </View>
                <View>
                    <Text style={styles.totalValueText}>R$ {total.toFixed(2)}</Text>
                    {total == 0.00 && <Text style={styles.totalText}> Oops, Empty Cart :( </Text>}
                    {total == 0.00 && <Text style={styles.totalText}> Add a product</Text>} 
                </View>
            </View>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={1}
            />
            <TouchableOpacity
                style={[styles.buyButton, (total === 0 || isLoading) && styles.disabledBuyButton]}
                onPress={handleBuyButtonPress}
                disabled={total === 0 || isLoading}
            >
                {isLoading ? (
                    <ActivityIndicator size="small" color="white" />
                ) : (
                    <Text style={styles.buyButtonText}>BUY</Text>
                )}
            </TouchableOpacity>


  </View>
);
}

export default CartScreen;
