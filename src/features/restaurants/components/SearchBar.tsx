import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { categorySelect } from '../../../redux/reducer/categoryReducer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchBar = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons
        name="magnify"
        size={20}
        color="gray"
        style={styles.icon}
      />
      <TextInput
        onChangeText={(value) => {
          dispatch(categorySelect(value));
        }}
        placeholder="Lütfen isteğiniz ürünü yazınız."
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 25,
    margin: 10,
    padding: 10,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
