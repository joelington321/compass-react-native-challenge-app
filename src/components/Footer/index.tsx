import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

interface FooterProps {
  normalText: string;
  clickableText: string;
  onPress: () => void;
}


const Footer = ({ normalText, clickableText, onPress }: FooterProps) => {
  return (
    <View style={styles.footerContainer}>
      <Text>{normalText} </Text>
      <Text onPress={onPress} style={styles.linkFooter}>{clickableText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#D78F3C',
    alignSelf: 'stretch',
    height: 50,
    width: 400,
    flexDirection: 'row'
  },
  linkFooter: {
    color: '#D78F3C',
  }
});











export default Footer;
