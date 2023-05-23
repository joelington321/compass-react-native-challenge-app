import { StyleSheet } from 'react-native';
import colors from '../../global/colors';


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
        fontWeight: 'bold',
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

export default styles;