import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantDetails from "../components/RestaurantDetails";
import RestaurantsScreen from "../screens/RestaurantsScreen";


export type RootStackParamsList = {
    Restaurants : undefined,
    RestaurantDetails : {
        item : any
    },
}

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export const RootNavigator = () => {
    return(
        <RootStack.Navigator>
            <RootStack.Screen 
                name="Restaurants" 
                component={RestaurantsScreen}
                options={{title : "Restoranlar"}}
            />
            <RootStack.Screen 
                options={{title : "Sipariş ver"}}
                name="RestaurantDetails" 
                component={RestaurantDetails} />
      </RootStack.Navigator>
    )
}



