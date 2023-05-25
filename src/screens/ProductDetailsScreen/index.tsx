import React from 'react';
import { View, Text } from 'react-native';
import MoreOrLess from '../../components/MoreOrLess';
import styles from './style';

function ProductDetailsScreen() {

    return (
        <View style={styles.Conteiner}>
            <Text> Product Screen</Text>
            <MoreOrLess></MoreOrLess>
        </View>
    );
};

export default ProductDetailsScreen;
