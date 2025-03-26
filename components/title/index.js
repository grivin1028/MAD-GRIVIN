import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({text = 'Register'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center', // Center the title
  },
});
