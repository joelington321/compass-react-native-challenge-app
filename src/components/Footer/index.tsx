import { Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

interface FooterProps {
  children: string;
}

function Footer({ children }: FooterProps) {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      //flex : 1,
      backgroundColor: '#2D2D2D',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 1,
      borderColor: '#D78F3C'
    }
  });

export default Footer;





