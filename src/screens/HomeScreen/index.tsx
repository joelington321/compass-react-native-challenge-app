import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import styles from './style';
import Product from '../../components/Item/Product';
import { fetchProducts } from '../../api/storeapi';
import { ProductData } from '../../global/types';


interface HomeScreenProp {
    navigation: NavigationProp<ParamListBase>;
}


const HomeScreen = ({ navigation }: HomeScreenProp) => {
    const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        fetchProducts()
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
                    <Text style={styles.headerUser}>Welliton</Text>
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