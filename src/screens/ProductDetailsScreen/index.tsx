import React from 'react';
import { View, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/native';

import styles from './style';
import Product from '../../components/Item/Product';
import { StateDisplay, ProductData, icons } from '../../global/types';

type ProductDetailsRouteProp = RouteProp<ParamListBase, 'ProductDetailsScreen'>;

interface ProductDetailsScreenProps {
    route: ProductDetailsRouteProp;
}

//product details receive a item to display 
function ProductDetailsScreen({ route }: ProductDetailsScreenProps) {
    const { item } = route.params as { item: ProductData };

    return (
        <View style={styles.container}>
            <View style={styles.cartContainer}>
                <Image
                    source={icons.iconCart}
                    style={styles.cartImage}
                />
            </View>
            <View style={styles.productContainer}>
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
                    state={StateDisplay.Info}
                />
            </View>
        </View>
    );
}

export default ProductDetailsScreen;
