import React from 'react';
import { View } from 'react-native';
import AppNavigation from './src/navigation';
import { CartProvider } from './src/api/context';

export default function App() {
  return (
    <CartProvider>
      <View style={{ flex: 1 }}>
        <AppNavigation />
      </View>
    </CartProvider>
  );
}
