import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color:"blue"
  },
});
