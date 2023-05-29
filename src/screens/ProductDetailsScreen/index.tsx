import React, { useState } from 'react';
import { View, Pressable, Alert } from 'react-native';
import { RouteProp, NavigationProp, ParamListBase } from '@react-navigation/native';
import { useCart } from '../../api/context';
import styles from './style';
import Product from '../../components/Item/Product';
import { StateDisplay, ProductData } from '../../global/types';
import Cart from '../../components/Cart';

type ProductDetailsRouteProp = RouteProp<ParamListBase, 'ProductDetailsScreen'>;

interface ProductDetailsScreenProps {
  route: ProductDetailsRouteProp;
  navigation: NavigationProp<ParamListBase>;
}

function ProductDetailsScreen({ route, navigation }: ProductDetailsScreenProps, props: any) {
  const { item } = route.params as { item: ProductData };
  const { addToCart, cartItems } = useCart();
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const [amount] = useState<number>(existingCartItem ? existingCartItem.quantity : 1);
  const [isLoading, setIsLoading] = useState(false);

  const onPressCart = () => {
    navigation.navigate('CartScreen');
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: amount,
      });
      Alert.alert('Good!', 'Product sucessfully purchased.');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressCart}>
        <Cart />
      </Pressable>
      <View style={styles.productContainer}>
        {isLoading ? (
          <Product
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rate={item.rating.rate}
            count={item.rating.count}
            state={StateDisplay.Info}
            onAddToCart={handleAddToCart}
            amount={amount}
            load={true}
          />
        ) : (
          <Product
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rate={item.rating.rate}
            count={item.rating.count}
            state={StateDisplay.Info}
            onAddToCart={handleAddToCart}
            amount={amount}
            load={false}
          />
        )}
      </View>
    </View>
  );
}

export default ProductDetailsScreen;
