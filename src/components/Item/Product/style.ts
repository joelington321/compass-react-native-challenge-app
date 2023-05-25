import { StyleSheet } from 'react-native';
import colors from '../../../global/colors';

export const styleHome = StyleSheet.create({
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


export const styleInfo = StyleSheet.create({
  cardContainer: {
    height: 630,
    width: 380,
    backgroundColor: colors.CardProduct,
    borderRadius: 25,
    paddingVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  priceContainer: {
    margin: 10,
    height: 50,
    width: 170,
    backgroundColor: colors.Background,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer:{
    flexDirection: 'row',
    marginBottom:20,
    marginLeft:30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceandmoreContainer: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row', // Add this line to make the content display in the same row
  },
  titleText: {
    color: '#F5F5F5',
    fontSize: 12,
    fontWeight: 'bold',
    flex: 7,
  },
  priceText: {
    color: colors.Primary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center', // Add this line to align the text in the center
    margin: 4,
    flex:1,
  },
  favoriteIcon: {

  },
  favoritedContainer: {
    alignSelf: 'flex-end',
    flex: 2
  },
  image: {
    width: 210,
    height: 250,
    alignSelf: 'center',
  },
  descriptionContainer:{
    margin: 15
  },
  descriptionText:{
    fontSize: 11
  },
  addToCartButton:{
    backgroundColor: colors.ButtonBuyorAdd,
    width: 260,
    height: 50,
    borderRadius: 20,
  },
  addToCartText:{
    flex:1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  starContainer:{
    margin: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  }
});


