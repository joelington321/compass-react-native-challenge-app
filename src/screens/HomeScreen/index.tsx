import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import styles from './style';
import Product from '../../components/Item/Product';
import axios from 'axios';

interface HomeScreenProp {
    navigation: NavigationProp<ParamListBase>;
}

interface ProductData {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const HomeScreen = ({ route }, { navigation }: HomeScreenProp) => {
    const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products/')
            .then((response) => {
                setProducts(response.data);
            })
            .catch(() => {
                console.log('Error fetching data');
            });
    }, []);

    const onPressProduct = () => {
        navigation.navigate('ProductDetailsScreen');
    };

    const renderProduct = ({ item }: { item: ProductData }) => (
        <TouchableOpacity onPress={onPressProduct}>
            <Product
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rate={item.rating.rate}
                count={item.rating.count}
                amount={1}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.headerUser}>{route.params.email}</Text>
                </View>
                <View style={styles.cartContainer}>
                    <Image
                        source={require('../../assets/icons/icon_cart.png')}
                        style={styles.cartImage}
                    />
                </View>
            </View>
            <SafeAreaView style={styles.containerCards}>
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </SafeAreaView>
        </View>
    );
};

export default HomeScreen;