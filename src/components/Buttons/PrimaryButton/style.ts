import { StyleSheet} from 'react-native';
import colors from '../../../global/colors';

const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: colors.Primary,
      borderRadius: 25,
      width: 350,
      height: 50,
      justifyContent: 'center'
  
    },
    textButton: {
      color: colors.textButton,
      textAlign: 'center',
  
    }
  });

  export default styles;