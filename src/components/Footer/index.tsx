import { Text, View } from 'react-native';
import React from 'react';
import styles from './style';


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



export default Footer;
