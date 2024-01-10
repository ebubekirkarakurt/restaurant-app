import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'

type Props = {}

const LoginScreen = (props: Props) => {
  return (
    <View>
      <LoginForm/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})