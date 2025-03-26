import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer} />
      <View style={styles.greenContainer} />
      <View style={styles.blueContainer} />
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redContainer: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  greenContainer: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  },
  blueContainer: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
});
