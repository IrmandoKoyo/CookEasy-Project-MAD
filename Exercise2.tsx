import React from 'react';
import {Image, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 8,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});

const DisplayImages = () => {
  const base64Image =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Text style={styles.title}>Belajar Core Component: Image</Text>

        {/* 1. Local Image */}
        <Text style={styles.label}>1. Local Image</Text>
        <Image
          style={styles.image}
          source={require('./assets/Image/LOGO_UNIVERSITAS_KLABAT.png')}
        />

        {/* 2. Network Image */}
        <Text style={styles.label}>2. Network Image</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://raw.githubusercontent.com/IrmandoKoyo/MAD-Project/48bcef6cd9a48fc1c443f346b811d3f1db1550a1/assets/LOGO_UNIVERSITAS_KLABAT.png',
          }}
        />

        {/* 3. Base64 Image */}
        <Text style={styles.label}>3. Base64 Image</Text>
        <Image style={styles.image} source={{uri: base64Image}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisplayImages;