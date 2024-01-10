import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppNavigation } from '../../../navigation/utils/useAppNavigation';

type Props = {};

const RegisterHeader = (props: Props) => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.txt}>Kayıt Ol</Text>
    </View>
  );
};

export default RegisterHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'transparent',
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    paddingStart: 10,
  },
});
