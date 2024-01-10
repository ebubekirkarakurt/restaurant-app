import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { LinearGradient } from 'expo-linear-gradient';
import RegisterHeader from '../components/RegisterHeader';

type Props = {};

const RegisterScreen = (props: Props) => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.main}>
      <View >
        <RegisterHeader/>
      </View>
      <RegisterForm />
    </LinearGradient>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  main: {
    flex:1
  }
});
