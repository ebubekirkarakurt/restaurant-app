import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import RegisterScreenTitle from '../components/RegisterScreenTitle';

type Props = {};

const RegisterScreen = (props: Props) => {
  return (
    <View>
      <RegisterScreenTitle />
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
