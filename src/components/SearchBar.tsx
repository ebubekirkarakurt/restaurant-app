import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { RootState } from '../redux/store/store'
import { categorySelect } from '../redux/reducer/categoryReducer'


const SearchBar = () => {

    const categoryValue = useAppSelector((state : RootState) => state.categoryReducer.category)
    const dispatch = useAppDispatch()


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.main}>
      <TextInput
        onChangeText={(value)=>{
                dispatch(categorySelect(value))
        }}

        style={styles.input}
        placeholder='Lütfen isteğiniz ürünü yazınız.'
      />
    </SafeAreaView>
  </GestureHandlerRootView>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    main:{
        margin:10,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    input:{
        backgroundColor:'#F5F5F5',
        width:300,
        height:50,
        margin:10,
        borderRadius:10,
        padding:10
    }
})