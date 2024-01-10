import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { addCart } from '../../../redux/reducer/cartReducer';

type Props = {};

const Dropdown = (props: Props) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <View style={styles.main}>
      <Text> Lütfen miktar seçin </Text>

      <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
          setValue(selectedItem);
          console.log('selected titeö : ' + selectedItem);
        }}
        buttonTextAfterSelection={() => value || 'Miktar seçin'}
        rowTextForSelection={(item) => item.value}
        defaultValueByIndex={0}
        buttonStyle={styles.dropDownbtn}
        dropdownStyle={{ backgroundColor: 'white' }}
        renderCustomizedButtonChild={(item, index) => (
          <View style={{ alignItems: 'center' }}>
            <Text> {item} </Text>
          </View>
        )}
        renderCustomizedRowChild={(item, index) => <Text> {item} </Text>}
      />

      <Button
        onPress={() => {
          dispatch(addCart(value));
        }}
        title="Sepete Ekle"
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownbtn: {
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    width: 60,
    margin: 10,
  },
});
