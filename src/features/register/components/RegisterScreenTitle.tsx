import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const RegisterScreenTitle = (props: Props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Kayıt ol</Text>
    </View>
  );
};

export default RegisterScreenTitle;

const styles = StyleSheet.create({
  main: {
    marginTop: 50,
    margin: 20,
  },
  title: {
    fontSize: 30,
    padding: 5,
    fontWeight: '600',
  },
});
