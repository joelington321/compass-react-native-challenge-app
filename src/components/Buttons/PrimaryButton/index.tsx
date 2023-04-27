import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';


interface PrimaryButtonProps {
  children: string;
  //function
}

//Primary button receive a string to display and a function to execute
function PrimaryButton({ children }: PrimaryButtonProps) {

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



const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#D78F3C',
    borderRadius: 25,
    width: 375,
    height: 55,
    justifyContent: 'center'

  },
  textButton: {
    color: '#F5F5F5',
    textAlign: 'center',

  }
});

export default PrimaryButton;
