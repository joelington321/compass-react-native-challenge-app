import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'

interface CategoryGridTileProps {
    title: string;
    color: string;
}

const CategoryGridTile: React.FC<CategoryGridTileProps> = ({ title, color }) => {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Text>{title}</Text>
        </View>
    );
};

const data = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '10' }, { key: '11' }, { key: '12' }, { key: '13' }, { key: '14' }];

function HomeScreen() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.topText} >HOME</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <CategoryGridTile title={item.key} color={'white'} />}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    textContainer: {
        height: 60,
        width: '100%',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
