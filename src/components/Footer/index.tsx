import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../global/colors';

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











export default Footer;
