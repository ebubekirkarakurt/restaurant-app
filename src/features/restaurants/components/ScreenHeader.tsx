import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartButton from './CartButton'
import SearchBar from './SearchBar'
import { Surface } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {}

const ScreenHeader = (props: Props) => {
    return (
          

            <Surface style={styles.main} elevation={2}>
                <SearchBar />
          <CartButton/>
          </Surface>
  )
}

export default ScreenHeader

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 14,
        padding: 5
    }
})