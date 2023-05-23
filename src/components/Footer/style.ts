import { StyleSheet} from 'react-native';
import colors from '../../global/colors';


const styles = StyleSheet.create({
    footerContainer: {
      backgroundColor: colors.Background,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 1,
      borderColor: colors.Primary,
      alignSelf: 'stretch',
      height: 50,
      width: 400,
      flexDirection: 'row'
    },
    linkFooter: {
      color: colors.Primary,
    }
  });

  export default styles;