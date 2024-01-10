import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const ResImage = (props: Props) => {
  return (
    <View>
          <Image
              style={styles.img}
            source={require("../../../../assets/restaurantlogin.png")}
          />
    </View>
  )
}

export default ResImage

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 200
    }
})