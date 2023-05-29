import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const MoreOrLess = ({amount, setAmount}) => {
  

  const more = () => {
    setAmount(amount + 1)
 
  }
  const less = () => setAmount(amount - 1);
  const disable = amount === 1;

  return (
    <View style={styles.container}>
      <Pressable disabled={disable} onPress={less} style={styles.button}>
        <Text style={styles.textButton}> - </Text>
      </Pressable>
      <Text style={styles.textMid}> {amount} </Text>
      <Pressable onPress={more} style={styles.button}>
        <Text style={styles.textButton}> + </Text>
      </Pressable>
    </View>
  );
};

export default MoreOrLess;