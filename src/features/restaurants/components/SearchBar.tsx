import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { categorySelect } from '../../../redux/reducer/categoryReducer';

const SearchBar = () => {
  const dispatch = useAppDispatch();

  return (
      <View style={styles.main}>
        <TextInput
          onChangeText={(value) => {
            dispatch(categorySelect(value));
          }}
          style={styles.input}
          placeholder="Lütfen isteğiniz ürünü yazınız."
        />
      </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  main: {
    margin: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex:1
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    width: '100%'
  },
});
