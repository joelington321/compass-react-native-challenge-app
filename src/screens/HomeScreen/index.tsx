import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import styles from './style';


interface HomeScreenProp{
    navigation: NavigationProp<ParamListBase>;
};

const HomeScreen = ( { navigation }: HomeScreenProp ) => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];

    const onPress = () => {
        navigation.navigate('ProductDetailsScreen');
    }
    const Card = () => {
        return <TouchableOpacity onPress={onPress} style={styles.card} />;
};
    
    const renderItem = () => {
        return <Card />;
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.header}>HOME</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
                contentContainerStyle={styles.containerCards}
                numColumns={2}
            />
        </View>
    );
};

export default HomeScreen;
