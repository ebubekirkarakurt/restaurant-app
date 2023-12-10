import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from '../navigation/navigation';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Dropdown from './Dropdown';


type RestaurantDetailRouteProp = RouteProp<RootStackParamsList, 'RestaurantDetails'>;

type Props = {
    route: RestaurantDetailRouteProp;
};

const RestaurantDetails = ({ route } : Props) => {
    const item = route.params.item
  return (
    
    <View style={styles.main}>
    
      <View style={styles.container}>
        <Text style={styles.name} > {item.name} </Text>
        {
          !item.is_closed ? 
         <View style={{flexDirection:'row', padding:5}}>
            <Text style={{fontSize:18, color:'green'}} > Şu anda açık </Text>
            <FontAwesome name="motorcycle" size={24} color="green" />
         </View>
         :
         <View style={{flexDirection:'row', padding:5}}>
            <Text style={{fontSize:18, color:'red'}}> Şu anda kapalı </Text>
            <AntDesign name="closecircle" size={24} color="red" />
         </View>
        }
        <Image style={styles.image} source={{uri:item.image_url ? item.image_url : null }} />
      </View>

      <View style={styles.address}>
        
        <View style={{flexDirection:'row', margin:10}}>

          <Feather name="phone" size={20} color="black" />
          <Text> {item.display_phone} </Text>
          
        </View>

        <Text> {item.location.address1} {item.location.address2} </Text>
        <Text> {item.location.city} </Text>
        
        <View style={styles.dropdown}>
            <Dropdown/>
        </View>

      </View>
    </View>
  )
}

export default RestaurantDetails

const styles = StyleSheet.create({
    main:{
        marginTop:50,
        
    },
    container:{
      justifyContent:'center',
      alignItems:'center',
    },
    address:{
      justifyContent:'center',
      alignItems:'center',
      margin:20
    },
    name:{
      fontSize:20,
      padding:5
    },
    image:{
        width:350,
        height:300,
        borderRadius:5
    },
    dropdown:{
      backgroundColor:'white',
      width:'100%',
      marginTop:100,
      borderRadius:10
    }
})