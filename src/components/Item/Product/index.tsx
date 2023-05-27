import React, { useState, useContext } from 'react';
import { Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { styleInfo, styleHome, styleCart } from './style';
import { StateDisplay } from '../../../global/types';
import MoreOrLess from '../../Inputs/MoreOrLess';
import StarRow from '../../Ratingstars';
import { CartContext } from '../../../contexts/CartContext';

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
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [isRemoved, setIsRemoved] = useState<boolean>(false);

  const cartContext = useContext(CartContext);
  const carts = cartContext;

  const formattedPrice = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleAddToCart = () => {
    carts.setCart((prevCart) => [...prevCart, { id, amount }]);
    console.log(carts.cart)
  };

  const handleRemove = () => {
    setIsRemoved(true);
  };

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
                source={isFavorited ? favorited.activated : favorited.disabled}
                style={styleHome.favoriteIcon}
              />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity style={styleHome.addToCartButton} onPress={handleAddToCart}>
          <Text style={styleHome.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    );

  if (state === StateDisplay.Info) {
    return (
      <View style={styleInfo.cardContainer}>
        <View style={styleInfo.headerContainer}>
          <Text style={styleInfo.titleText}>{title}</Text>
          <View style={styleInfo.favoritedContainer}>
            <Pressable onPress={toggleFavorite}>
              <Image
                source={isFavorited ? favorited.activated : favorited.disabled}
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
          <MoreOrLess setAmount={handleAddToCart} />
        </View>
        <View style={styleInfo.descriptionContainer}>
          <Text style={styleInfo.descriptionText}>{description}</Text>
        </View>
        <TouchableOpacity style={styleInfo.addToCartButton} onPress={handleAddToCart}>
          <Text style={styleInfo.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
    return <Text>ERROR TEXT</Text>;
  }
};

export default Product;

