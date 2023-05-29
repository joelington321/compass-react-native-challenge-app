import { StyleSheet } from 'react-native'
import colors from '../../global/colors';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.Background,

    },
    contentContainer:{
        marginHorizontal: 30,
        marginTop: 70,
        flex: 1,
    },
    textContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    totalText:{     
        fontSize: 20,
        fontWeight: '700',
        color: colors.InputPlaceholder,
        marginTop: 20
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
    opsText:{
        fontSize: 32,
        fontWeight: '600',
        color: colors.InputPlaceholder,
        marginTop: 60
    },
    productAlertText:{
        fontSize: 20,
        fontWeight: '600',
        color: colors.InputPlaceholder,
        marginTop: 60
    },
    listContainer:{
        flex: 1,
    },
    buyButton: {
        alignSelf: 'center',
        marginBottom: 100,
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