import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Image 1: Working!</Text>
      <Image source={require('./image1.png')} style={{ width: 100, height: 100, borderWidth: 3, borderColor: 'red' }} />
      <Text>Image 2: Not visible when expo-update is installed</Text>
      <Image source={require('./image2.png')} style={{ width: 100, height: 100, borderWidth: 3, borderColor: 'red' }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
