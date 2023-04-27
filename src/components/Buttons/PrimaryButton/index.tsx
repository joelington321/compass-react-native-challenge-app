import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './style';


interface PrimaryButtonProps {
  children: string;
  //function
}

//Primary button receive a string to display and a function to execute
const PrimaryButton = ({ children }: PrimaryButtonProps) => {

  function pressHandler() {
    console.log('Pressed');
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
