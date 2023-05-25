import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import styles from './style';
import Product from '../../components/Item/Product';
import { fetchProducts } from '../../api/storeapi';
import { ProductData, StateDisplay, icons } from '../../global/types';


interface HomeScreenProp {
    navigation: NavigationProp<ParamListBase>;
}


const HomeScreen = ({ navigation }: HomeScreenProp) => {
    //the products vector 
    const [products, setProducts] = useState<ProductData[]>([]);

    //this use effect calls the products collected by the api
    useEffect(() => {
        fetchProducts()
            .then((response) => {
                setProducts(response.data);
            })
            .catch(() => {
                console.log('Error fetching data');
            });
    }, []);

    //Call the page product details and send the item information
    const onPressProduct = (item: ProductData) => {
        navigation.navigate('ProductDetailsScreen', { item });
    };

    //the funciton to render a item in the flatlist
    const renderProduct = ({ item }: { item: ProductData }) => (
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
                amount={1}
                state={StateDisplay.Home}
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
                        source={icons.iconCart}
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