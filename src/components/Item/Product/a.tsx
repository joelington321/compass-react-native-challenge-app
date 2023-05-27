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
    onAddToCart?: () => void;
    removeFromCart?: (id: number) => void;
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
    state,
    removeFromCart,
    ...props
}: ProductProps) => {


    //save the state of favorited
    const [isFavorited, setIsFavorited] = useState<boolean>(false);


    const formattedPrice = price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
    }); // Format the price with comma as the decimal separator



    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };


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
                    <MoreOrLess amount={amount} onAmountChange={setAmount} />

                </View>

                <View style={styleInfo.descriptionContainer}>
                    <Text style={styleInfo.descriptionText}>
                        {description}
                    </Text>
                </View>
                <Pressable onPress={props.onAddToCart}>
                    <View style={styleInfo.addToCartButton}>
                        <Text style={styleInfo.addToCartText}>ADD TO CART</Text>
                    </View>
                </Pressable>
            </View >
        )
    } else {
        return (
            <Text>ERROR TEXT</Text>
        )
    }
};

export default Product;
