import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './style';


interface PrimaryButtonProps {
  children: string;
  onPress: () => void; // new prop for onPress function
}

const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {

  function pressHandler() {
    onPress(); // call the onPress function
  }

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.buttonStyle}>
        <Text style={styles.textButton}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
