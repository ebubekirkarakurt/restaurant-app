import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Restaurants from '../components/Restaurants';
import useApiService from '../../../service/useApiService';
import SearchBar from '../components/SearchBar';
import { useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../redux/store/store';
import ScreenHeader from '../components/ScreenHeader';
import { LinearGradient } from 'expo-linear-gradient';

const RestaurantsScreen = () => {
  const category = useAppSelector(
    (state: RootState) => state.categoryReducer.category,
  );
  const result = useApiService(category);

  return (
    <View style={styles.main}>
      <ScreenHeader/>
      <ScrollView>
        <View style={styles.main}>
          <Restaurants data={result} price="₺" title="Ucuz Restoranlar" />
          <Restaurants data={result} price="₺₺" title="Uygun Restoranlar" />
          <Restaurants data={result} price="₺₺₺" title="Pahalı Restoranlar" />
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  main: {},
});
