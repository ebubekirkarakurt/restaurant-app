import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const ResImage = (props: Props) => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.img}
        source={require('../../../../assets/restaurant.png')}
      />
      <Text style={styles.title}>Restauranım Uygulaması</Text>
    </View>
  );
};

export default ResImage;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    padding: 15,
  },
});
