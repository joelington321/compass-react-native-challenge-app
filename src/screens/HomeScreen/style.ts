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
        flex: 1,
        alignItems: 'center',
        marginHorizontal:10,
        marginBottom: 50
    },
    headerUser: {
        fontSize: 20,
        marginLeft: 3,
        color: colors.Primary,
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 14,
        marginLeft: 3,
        color: colors.InputPlaceholder,
        justifyContent: 'center',
    },
    trace:{
        paddingHorizontal: 40,
        backgroundColor: 'white',
        padding: 1
    },
    textContainer: {
        fontWeight: 'bold',
        margin: 15,
        alignItems: 'flex-start',
        paddingBottom: 25,
        marginTop: 25
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