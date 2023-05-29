import { StyleSheet } from 'react-native'
import colors from '../../global/colors';

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        flex:1,
        marginHorizontal: 30,
    },
    totalText:{
        fontSize: 20,
        fontWeight: '700',
        color: colors.InputPlaceholder,
    },
    emptyCart:{
        fontSize: 32,
        fontWeight: '600',
        color: colors.InputPlaceholder,
    },
    addAProduct:{
        fontSize: 24,
        fontWeight: '700',
        color: colors.InputPlaceholder,
    },
    totalTextContainer:{
        marginBottom : 10
    },
    headerContainer:{

    },
    totalValueText:{
        fontSize: 32,
        fontWeight: '600',
        color: colors.Primary,
    },
    columnWrapper:{

    },
    buyButton: {
        alignSelf: 'center',
        marginBottom: 200,
        width: 230,
        height: 60,
        borderRadius: 25,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      },
      disabledBuyButton:{
        backgroundColor: 'lightgray'
      },
      
      buyButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
});

export default styles;