import { StyleSheet } from 'react-native'
import colors from '../../global/colors'


const styles = StyleSheet.create({
    container: {
        marginTop: 25,
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
        alignContent: 'center', 
    }, 
    countNumber:{
        backgroundColor: '#20BE4C',
        borderRadius: 50,
        paddingHorizontal: 4,
        color: '#FFFFFF',
        position: 'absolute',
        left: 15,
        bottom: 15
    }  
});

export default styles;