import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Restaurants from '../components/Restaurants'
import useApiService from '../service/useApiService'


const RestaurantsScreen = () => {

  const result = useApiService()

  return (

       <ScrollView>
          <View style={styles.main}>
              <Restaurants data={result} price='₺' title='Ucuz Restoranlar'/>
              <Restaurants data={result} price='₺₺'  title='Uygun Restoranlar'/>
              <Restaurants data={result} price='₺₺₺'  title='Pahalı Restoranlar'/>    
          </View>
       </ScrollView>
  )
}

export default RestaurantsScreen;

const styles = StyleSheet.create({
  main:{
    
  }
})