import React, { useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './style';

const favorited = {
    disabled: require('../../../assets/icons/disabledfavorite.png'),
    activated: require('../../../assets/icons/enabledfavorite.png')
};

enum StateDisplay {
    Home,
    Cart,
    Info
}




interface ProductProps {
    id: number;
    title: string;
    price: number;
    description?: string;
    category?: string;
    image: string; // Updated to accept a string URL
    rate?: number;
    count?: number;
    amount?: number;
    state?: StateDisplay;
}

const Product = ({
    id,
    title,
    price,
    description,
    category,
    image,
    rate,
    count,
    amount,
    state,
    ...props
}: ProductProps) => {
    const [isFavorited, setIsFavorited] = useState<boolean>(false);
    const formattedPrice = price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
    }); // Format the price with comma as the decimal separator

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.titleText}>{title}</Text>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <View style={styles.cardBottonContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>R$ {formattedPrice}</Text>
                </View>
                <View style={styles.favoritedContainer}>
                    <Pressable onPress={toggleFavorite}>
                        <Image
                            source={
                                isFavorited ? favorited.activated : favorited.disabled
                            }
                            style={styles.favoriteIcon}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Product;
