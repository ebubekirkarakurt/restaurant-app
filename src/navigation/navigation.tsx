import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantDetails from '../features/restaurants/components/RestaurantDetails';
import RestaurantsScreen from '../features/restaurants/screens/RestaurantsScreen';
import { Text, View } from 'react-native';
import CartButton from '../features/restaurants/components/CartButton';
import RegisterScreen from '../features/register/screens/RegisterScreen';

export type RootStackParamsList = {
  Restaurants: undefined;
  RestaurantDetails: {
    item: any;
  };
  RegisterScreen: undefined
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          title: 'Restoranlar',
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
              }}
            >
              <Text>Restoranlar</Text>
              <CartButton />
            </View>
          ),
        }}
      />
      <RootStack.Screen
        options={{ title: 'Sipariş ver' }}
        name="RestaurantDetails"
        component={RestaurantDetails}
      />
      <RootStack.Screen
        name='RegisterScreen'
        component={RegisterScreen}
      />
    </RootStack.Navigator>
  );
};
