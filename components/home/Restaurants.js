import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url: 'https://www.benihana.com/wp-content/uploads/2019/05/2019_Benihana_Website_Locations_1200x1200_Orlando.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: 'India\'s Grill',
    image_url: 'https://www.indiasgrillorlando.com/wp-content/uploads/2019/07/India-Grill-Orlando-Indian-Restaurant-1.jpg',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

export default function Restaurants({navigation, ...props}) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{ backgroundColor: 'white' }}
          key={index}
          onPress={() => navigation.navigate('RestaurantDetailScreen', {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories,
          })} 
        >
          <View style={{ marginTop: 10, padding: 15 }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: '100%', height: 180, borderRadius: 15 }}
    />
    <TouchableOpacity style={styles.heartOutline}>
      <MaterialCommunityIcons name="heart-outline" size={25} color={'white'} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={styles.restaurantInfo}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30-45 • min</Text>
    </View>
    <View style={styles.ratingView}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  heartOutline: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 100,
  },
  restaurantInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingView: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
