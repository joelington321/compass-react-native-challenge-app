import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

interface FooterProps {
  children: string;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#D78F3C',
    alignSelf: 'stretch',
    height: 50,
    width: 400,
  }
});



export default Footer;
