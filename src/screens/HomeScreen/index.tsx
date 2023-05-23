import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './style';

const Card = () => {
    return <View style={styles.card} />;
};

const HomeScreen = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];

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
