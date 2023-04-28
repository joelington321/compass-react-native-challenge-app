import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import colors from '../../global/colors';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.Background,
    },
    containerCards: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Background,
        paddingVertical: 10,
    },
    header: {
        fontSize: 20,
        color: colors.Primary,
        justifyContent: 'center',
    },
    textContainer: {
        margin: 15,
        alignItems: 'flex-start',
        paddingBottom: 25,
    },
    card: {
        width: 150,
        height: 200,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        elevation: 2,
    },
});

export default HomeScreen;
