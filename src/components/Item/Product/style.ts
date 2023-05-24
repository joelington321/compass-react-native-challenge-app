import { StyleSheet } from 'react-native';
import colors from '../../../global/colors';

const styleHome = StyleSheet.create({
  cardContainer: {
    height: 220,
    width: 186,
    backgroundColor: colors.CardProduct,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'column'
  },
  priceContainer: {
    margin: 10,
    height: 30,
    width: 100,
    backgroundColor: colors.Background,
    borderRadius: 8,
    alignItems: 'center',
  },
  cardBottonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row', // Add this line to make the content display in the same row
  },
  titleText: {
    color: '#F5F5F5',
    fontSize: 12,
    fontWeight: 'bold',
    flex: 2,
  },
  priceText: {
    color: colors.Primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Add this line to align the text in the center
    flex: 1,
    margin: 4

  },
  favoriteIcon: {},
  favoritedContainer: {},
  image: {
    width: 120,
    height: 120,
    flex: 6,
    alignSelf: 'center',
  },
});

export default styleHome;
