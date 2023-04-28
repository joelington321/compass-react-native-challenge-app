import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    primaryInputContainer: {
        height: 80,
    },
    errorMsg: {
        margin: 3,
        justifyContent: 'flex-start',
        color: '#FF4B4B',
        fontSize: 12,
        paddingLeft: 15,

    },
    inputBackground: {
        backgroundColor: '#656262',
        borderRadius: 25,
        justifyContent: 'flex-start',
        width: 350,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderColor: '#656262',
        borderWidth: 1
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 8,
    }
});

export default styles;