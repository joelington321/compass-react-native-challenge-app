import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import styles from './style';
import Product from '../../components/Item/Product';

interface HomeScreenProp {
    navigation: NavigationProp<ParamListBase>;
}

const HomeScreen = ({ navigation }: HomeScreenProp) => {
    const products = [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description:
                "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rate: 3.9,
            count: 120,
        },
        {
            id: 2,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description:
                "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rate: 3.9,
            count: 120,
        },
        {
            id: 3,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description:
                "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rate: 3.9,
            count: 120,
        },
    ];

    const onPressProduct = () => {
        navigation.navigate('ProductDetailsScreen');
    };

    const renderProduct = ({ item }: { item: typeof products[0] }) => (
        <TouchableOpacity onPress={onPressProduct}>
            <Product
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rate={item.rate}
                count={item.count}
                amount={1}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.headerUser}>Welliton</Text>
                </View>
                <View style={styles.cartContainer}>
                    <Image
                        source={require('../../assets/icons/icon_cart.png')}
                        style={styles.cartImage}
                    />
                </View>
            </View>
            <View style={styles.containerCards}>
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>
        </View>
    );
};

export default HomeScreen;
