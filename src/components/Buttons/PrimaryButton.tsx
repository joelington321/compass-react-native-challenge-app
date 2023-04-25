import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const PrimaryButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={styles.buttonStyle}
      containerStyle={{ marginVertical: 10 }}
    />
  );
};


const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#D78F3C',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default PrimaryButton;
