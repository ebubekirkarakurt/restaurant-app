import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useAppNavigation } from '../../../navigation/utils/useAppNavigation';
import { EvilIcons } from '@expo/vector-icons';
import { Surface } from 'react-native-paper';

type Props = {
  data: any;
  price: string;
  title: string;
};

const Restaurants = ({ data, price, title }: Props) => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.main}>
      <Text style={styles.title}> {title} </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.businesses}
        renderItem={({ item }) => {
          return (
            <View>
              {item.price == price ? (
                item.image_url ? (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('RestaurantDetails', { item: item })
                    }
                  >
                    <Surface style={styles.container} elevation={2}>
                      <View style={styles.cart}>
                        <Text style={{ fontSize: 18, padding: 5 }}>
                          {' '}
                          {item.name}{' '}
                        </Text>
                        <Image
                          style={styles.image}
                          source={{
                            uri: item.image_url ? item.image_url : null,
                          }}
                        />
                        <Text> {item.category} </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 5,
                          display: 'flex',
                        }}
                      >
                        <Text>
                          {' '}
                          {item.review_count} Değerlendirme : {item.rating}{' '}
                        </Text>
                        <EvilIcons name="star" size={19} color="black" />

                        <View
                          style={{ alignItems: 'flex-end', display: 'flex' }}
                        >
                          <Text> {item.categories[0].title} </Text>
                        </View>
                      </View>
                    </Surface>
                  </Pressable>
                ) : null
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  main: {
    margin: 5,
    padding: 5,
  },
  container: {
    backgroundColor: 'lightgrey',
    margin: 5,
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  cart: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
