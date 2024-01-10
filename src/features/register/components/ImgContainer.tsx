import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const ImgContainer = (props: Props) => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.img}
        source={require('../../../../assets/restaurantlogin.png')}
      />
    </View>
  );
};

export default ImgContainer;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 200,
  },
});
