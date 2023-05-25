import { StyleSheet } from 'react-native';
import colors from '../../global/colors';


const styles = StyleSheet.create({
    Conteiner: {
        flexDirection: 'row',
        margin: 50,
    },
    Button: {
        borderRadius: 100,
        backgroundColor: colors.Background,
        width: 50,
        height: 50,
        justifyContent: 'center'
    
      },
      textButton: {
        color: colors.Primary,
        textAlign: 'center',
    
      }
});

export default styles;