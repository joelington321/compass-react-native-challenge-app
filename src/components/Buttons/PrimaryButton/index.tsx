import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';


interface PrimaryButtonProps {
  children: string;
}

function PrimaryButton({ children }: PrimaryButtonProps) {

  function pressHandler(){
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
    paddingVertical: 10,
    paddingHorizontal: 100
  },
  textButton:{
    color:'#F5F5F5',
  }
});

export default PrimaryButton;
