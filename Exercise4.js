import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.topContainer]}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('./asset/logo1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.row, styles.bottomContainer]}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};
export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    gap: 60,
    alignItems: 'center',
    height: 100,
    padding: 20,
  },
  topContainer: {
    backgroundColor: 'red',
  },
  bottomContainer: {
    backgroundColor: 'blue',
    justifyContent: 'space-between',
    padding: 20,
  },
  blackBox: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
  },
  yellowBox: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 150,
  },
});
