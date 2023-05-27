import { StyleSheet } from 'react-native';
import colors from '../../../global/colors';


const styles = StyleSheet.create({
  container: {
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        borderRadius: 100,
        backgroundColor: colors.Background,
        width: 50,
        height: 50,
        justifyContent: 'center'
    
      },
      textButton: {
        color: colors.Primary,
        textAlign: 'center',
        fontSize: 35,
        fontWeight :'bold',
        flex:1
      },
      textMid: {
        color: colors.Primary,
        textAlign: 'center',
        fontSize: 30,
        marginTop:5
      }
});

export default styles;