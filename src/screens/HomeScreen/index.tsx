import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'
import colors from '../../global/colors';

interface CategoryGridTileProps {
    title: string;
    color: string;
}

const CategoryGridTile = ({ title, color }: CategoryGridTileProps) => {
    return (
        <View style={[{ backgroundColor: color }]}>
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
        width: '95%',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    topText: {
        color: colors.Primary,
        fontSize: 20,
    },
    textContainer: {
        marginBottom: 20,
    }
});

export default HomeScreen;
