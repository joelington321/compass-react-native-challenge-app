import { StyleSheet } from 'react-native';
import colors from '../../global/colors';


const styles = StyleSheet.create({
    mainContainer:{
        width:'95%',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    topText:{
        color:colors.Primary,
        fontSize:20,
    },
    textContainer:{
        marginBottom:20,
    }
});

export default styles;