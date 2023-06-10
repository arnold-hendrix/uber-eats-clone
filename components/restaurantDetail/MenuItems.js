import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image:
      'https://i1.wp.com/www.seema.com/wp-content/uploads/2021/08/shutterstock_1199926645-scaled.jpg?fit=2560%2C1707&ssl=1',
  },
  {
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2022/Chilaquiles_Shot6_42.jpg?w=960&h=720&q=82&fm=jpg&fit=crop&dm=1658873040&s=5b566646b56bba0b53c2bbf1d3d29919',
  },
  {
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/3/3/0/FNM_040110-W-N-Dinners-015_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591380107.jpeg',
  },
  {
    title: 'Chapati Chicken Tikka Masala',
    description:
      'A delicious indian flatbread made with wheat flour. A must have with indian curries!',
    price: '$10.50',
    image:
      'https://www.supervalu.co.uk/wp-content/uploads/2017/10/Chicken-Tikka.png',
  },
  {
    title: 'Baked Tilapia',
    description:
      'Healthy and light option for a quick meal. Fresh fish with veggies: the perfect combo!',
    price: '$18.50',
    image:
      'https://www.eatwell101.com/wp-content/uploads/2021/05/Oven-Roasted-Fish-With-Cherry-Tomatoes.jpg',
  },
];

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItem}>
            {/* <BouncyCheckbox
              iconStyle={{ borderColor: 'lightGray', borderRadius: 0 }}
              fillColor='green'
            /> */}
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.foodTitle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image source={{ uri: props.food.image }} style={styles.foodImage} />
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  foodTitle: {
    fontSize: 19,
    fontWeight: 600,
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
