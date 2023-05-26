import React, { useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { styleInfo, styleHome, styleCart } from './style';
import { StateDisplay } from '../../../global/types';
import MoreOrLess from '../../Inputs/MoreOrLess';
import StarRow from '../../Ratingstars';

const favorited = {
    disabled: require('../../../assets/icons/disabledfavorite.png'),
    activated: require('../../../assets/icons/enabledfavorite.png')
};



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
    state: StateDisplay;
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


    //save the state of favorited
    const [isFavorited, setIsFavorited] = useState<boolean>(false);
    const [isRemoved, setIsRemoved] = useState<boolean>(false);

    const formattedPrice = price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
    }); // Format the price with comma as the decimal separator

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const handleRemove = () => {
        setIsRemoved(true);
    };

    //if the screen that called the product is the home screen, it will have this format 
    if (state === StateDisplay.Home)
        return (
            <View style={styleHome.cardContainer}>
                <Text style={styleHome.titleText}>{title}</Text>
                {image && <Image source={{ uri: image }} style={styleHome.image} />}
                <View style={styleHome.cardBottonContainer}>
                    <View style={styleHome.priceContainer}>
                        <Text style={styleHome.priceText}>R$ {formattedPrice}</Text>
                    </View>
                    <View style={styleHome.favoritedContainer}>
                        <Pressable onPress={toggleFavorite}>
                            <Image
                                source={
                                    isFavorited ? favorited.activated : favorited.disabled
                                }
                                style={styleHome.favoriteIcon}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>
        );

    //if the screen that called the product is the Description screen, it will have this format 
    if (state === StateDisplay.Info) {
        return (
            <View style={styleInfo.cardContainer}>
                <View style={styleInfo.headerContainer}>
                    <Text style={styleInfo.titleText}>{title}</Text>
                    <View style={styleInfo.favoritedContainer}>
                        <Pressable onPress={toggleFavorite}>
                            <Image
                                source={
                                    isFavorited ? favorited.activated : favorited.disabled
                                }
                                style={styleInfo.favoriteIcon}
                            />
                        </Pressable>
                    </View>
                </View>
                {image && <Image source={{ uri: image }} style={styleInfo.image} />}
                <View style={styleInfo.starContainer}>
                    <StarRow />
                </View>

                <View style={styleInfo.priceandmoreContainer}>
                    <View style={styleInfo.priceContainer}>
                        <Text style={styleInfo.priceText}>R$ {formattedPrice}</Text>
                    </View>
                    <MoreOrLess />
                </View>

                <View style={styleInfo.descriptionContainer}>
                    <Text style={styleInfo.descriptionText}>
                        {description}
                    </Text>
                </View>
                <View style={styleInfo.addToCartButton}>
                    <Text style={styleInfo.addToCartText}>
                        ADD TO CART
                    </Text>
                </View>
            </View >
        )
    }

    //if the screen that called the product is the Cart screen, it will have this format 
    if (state === StateDisplay.Cart) {
        return (
            <View style={styleCart.cardContainer}>

                {image && <Image source={{ uri: image }} style={styleCart.image} />}
                <View style={styleCart.cardInfoContainer}>
                    <Text style={styleCart.titleText}>{title}</Text>
                    <View style={styleCart.priceContainer}>
                        <Text style={styleCart.priceText}>R$ {formattedPrice}</Text>
                    </View>
                </View>
                <Pressable onPress={handleRemove}>
                    <View style={styleCart.removedContainer}>
                        <Text style={styleCart.removedText}>-</Text>
                    </View>
                </Pressable>
            </View>
        );
    }

    if (isRemoved) {
        return null;
    } else {
        return (
            <Text>ERROR TEXT</Text>
        )
    }
};

export default Product;
