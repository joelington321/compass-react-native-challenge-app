import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import { icons } from '../../global/types'

const StarRow = () => {
    return (
        <View style={styles.container}>
            <Image
                source={icons.iconStar}
                style={styles.starImage}
            />
            <Image
                source={icons.iconStar}
                style={styles.starImage}
            />
            <Image
                source={icons.iconStar}
                style={styles.starImage}
            />
            <Image
                source={icons.iconStar}
                style={styles.starImage}
            />
            <Image
                source={icons.iconStar}
                style={styles.starImage}
            />
        </View>
    );
};


export default StarRow;
