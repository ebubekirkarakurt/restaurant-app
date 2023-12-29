import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppSelector } from '../hooks/hooks';
import { RootState } from '../redux/store/store';

type Props = {};

const CartButton = (props: Props) => {
  const value = useAppSelector((state: RootState) => state.cartReducer.value);

  return (
    <View style={styles.main}>
      <MaterialCommunityIcons name="cart-variant" size={24} color="black" />
      <Text> {value} ürün </Text>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
