import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.main}>
      <View style={styles.topBar}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      <View style={styles.centerContent}>
        <Image
          source={require('./assets/Image/logo-with-motto-3.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    gap: 15,
    paddingLeft: 15,
    height: 100,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 100,
  },
  blackBox: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
  },
  yellowBox: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 150,
    resizeMode: 'contain',
  },
});
