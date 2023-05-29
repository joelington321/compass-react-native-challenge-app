import { StyleSheet } from 'react-native'
import colors from '../../global/colors'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        backgroundColor: colors.Background,

        
    },cartContainer:{
        alignContent: 'center',
        margin: 30,
        alignSelf: 'flex-end',
    },
    cartImage:{
        width: 24,
        height: 24,
    },
    productContainer:{
        alignItems: 'center', 
    },   
});

export default styles;