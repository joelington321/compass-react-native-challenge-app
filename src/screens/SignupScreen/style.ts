import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  inputsContainer: {
    flex: 6,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#D78f3C',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textInput: {
    color: '#656262',
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
    flexDirection:'row',
    paddingBottom: 25,
    justifyContent: 'flex-start',
  },
  termsText: {
    paddingLeft: 10,
    textAlign: 'left',
  }
});


  export default styles;