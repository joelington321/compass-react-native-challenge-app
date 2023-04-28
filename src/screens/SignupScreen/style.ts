import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  inputsContainer: {
    flex: 6,
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
  },
  termsContainer: {
    alignItems: 'flex-start',
    flexDirection:'row',
    height: 50,
    justifyContent: 'flex-start',
  },
  termsText: {
    paddingLeft: 10,
    textAlign: 'left',
  },
  errorMsgContainer:{
    flexDirection:'column',
    paddingBottom:0,
  },
  errorMsg: {
    margin: 3,
    display: 'flex',
    justifyContent: 'flex-start',
    color: colors.Warning,
    fontSize: 12,
    paddingLeft: 15,
    paddingBottom:0,
}
});


  export default styles;