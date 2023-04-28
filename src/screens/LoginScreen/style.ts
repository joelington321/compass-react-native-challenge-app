import { StyleSheet } from 'react-native';
import colors from '../../global/colors.tsx';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.Background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcomeContainer: {
      flex: 6,
      justifyContent: 'center',
    },
    inputsContainer: {
      flex: 6,
      //justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      color: colors.Primary,
      fontSize: 35,
      fontWeight: 'bold',
    },
    textInput: {
      color: colors.Input,
      alignItems: 'center',
    },
    footerContainer: {
      flex: 2,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    bodyContainer: {
      flex: 12,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  export default styles;