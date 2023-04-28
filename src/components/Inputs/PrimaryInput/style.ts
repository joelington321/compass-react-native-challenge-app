import {StyleSheet} from 'react-native';
import colors from '../../../global/colors';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    primaryInputContainer: {
        height: 80,
    },
    errorMsg: {
        margin: 3,
        justifyContent: 'flex-start',
        color: colors.Warning,
        fontSize: 12,
        paddingLeft: 15,

    },
    inputBackground: {
        backgroundColor: colors.Input,
        borderRadius: 25,
        justifyContent: 'flex-start',
        width: 350,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderColor: colors.Warning,
        borderWidth: 1
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 8,
    }
});

export default styles;