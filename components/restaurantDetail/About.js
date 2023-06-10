import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image:
    'https://www.farmhousethai.com/wp-content/uploads/2019/12/IMG_20191206_175757_1.jpg',
  price: '$$',
  reviews: '1500',
  rating: 4.5,
  categories: [{ title: 'Thai' }, { title: 'Comfort Food' }],
};

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories
    .map((category) => category.title)
    .join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} navigation={props.navigation}/>
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{ uri: props.image }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity style={styles.exitIcon} onPress={() => props.navigation.goBack()}>
      <FontAwesome5 name="chevron-circle-left" size={40} color={'white'} />
    </TouchableOpacity>
  </>
);

const RestaurantName = (props) => (
  <Text style={styles.restaurantNameText}>{props.name}</Text>
);

const RestaurantDescription = (props) => (
  <Text style={styles.RestaurantDescriptionText}>{props.description}</Text>
);

const styles = StyleSheet.create({
  restaurantNameText: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },
  RestaurantDescriptionText: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
  },
  exitIcon: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 100,
  },
});
