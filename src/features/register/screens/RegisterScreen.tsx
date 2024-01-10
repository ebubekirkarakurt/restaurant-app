import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { LinearGradient } from 'expo-linear-gradient';
import RegisterHeader from '../components/RegisterHeader';
import ImgContainer from '../components/ImgContainer';

type Props = {};

const RegisterScreen = (props: Props) => {
  return (
    <View style={styles.main}>
      <View>
        <RegisterHeader />
      </View>
      <ImgContainer />
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
