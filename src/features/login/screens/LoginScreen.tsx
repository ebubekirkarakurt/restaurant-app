import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginForm from '../components/LoginForm';
import ResImage from '../components/ResImage';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <View>
      <View style={styles.main}>
        <ResImage />
        <LoginForm />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
