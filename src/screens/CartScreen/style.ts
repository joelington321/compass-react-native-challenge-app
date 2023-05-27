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

    }
});

export default styles;