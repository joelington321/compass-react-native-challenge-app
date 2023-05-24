import { StyleSheet } from 'react-native';
import colors from '../../global/colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.Background,
    },
    headerContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    containerCards: {
        alignItems: 'center',
        marginHorizontal:10,
    },
    headerUser: {
        fontSize: 20,
        color: colors.Primary,
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 14,
        color: colors.InputPlaceholder,
        justifyContent: 'center',
    },
    textContainer: {
        fontWeight: 'bold',
        margin: 15,
        alignItems: 'flex-start',
        paddingBottom: 25,
    },
    columnWrapper:{
        justifyContent: 'space-between',
        
    },cartContainer:{
        alignContent: 'center',
        margin: 30
    },
    cartImage:{
        
    }
});

export default styles;