import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const RegisterHeader = (props: Props) => {
  return (
      <View style={styles.main}>
        <Text style={styles.txt}>Kayıt Ol</Text>
    </View>
  )
}

export default RegisterHeader

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'transparent',
        margin: 20
    },
    txt: {
        fontSize: 30,
        fontWeight:'600',
        color:'white'
    }
})