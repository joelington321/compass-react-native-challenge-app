import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const MoreOrLess = () => {
  const [amount, setAmount] = useState(0);

  const more = () => setAmount(amount + 1);
  const less = () => setAmount(amount - 1);
  const disable = amount === 0;

  return (
    <View style={styles.Conteiner}>
      <Pressable disabled={disable} onPress={less} style={styles.Button}>
        <Text style={styles.textButton}> - </Text>
      </Pressable>
      <Text style={styles.textButton}> {amount} </Text>
      <Pressable onPress={more} style={styles.Button}>
        <Text style={styles.textButton}> + </Text>
      </Pressable>
    </View>
  );
};

export default MoreOrLess;
