import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RegisterForm from '../components/RegisterForm';

type Props = {};

const RegisterScreen = (props: Props) => {
  return (
    <View>
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
