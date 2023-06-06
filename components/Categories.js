import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingBottom: 2}}>
      <View style={styles.categoryView}>
        <Image source={categories.pickUp.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{categories.pickUp.text}</Text>
      </View>
      <View style={styles.categoryView}>
        <Image source={categories.softDrinks.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{categories.softDrinks.text}</Text>
      </View>
      <View style={styles.categoryView}>
        <Image source={categories.bakedGoods.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{categories.bakedGoods.text}</Text>
      </View>
      <View style={styles.categoryView}>
        <Image source={categories.fastFood.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{categories.fastFood.text}</Text>
      </View>
      <View style={styles.categoryView}>
        <Image source={categories.deals.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{categories.deals.text}</Text>
      </View>
      <View style={styles.categoryView}>
        <Image source={categories.coffee.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{categories.coffee.text}</Text>
      </View>
      <View style={styles.categoryView}>
        <Image source={categories.desserts.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{categories.desserts.text}</Text>
      </View>
    </ScrollView>
  );
}

const categories = {
  pickUp: {
    image: require('../assets/images/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  softDrinks: {
    image: require('../assets/images/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  bakedGoods: {
    image: require('../assets/images/images/bread.png'),
    text: 'Bakery Items',
  },
  fastFood: {
    image: require('../assets/images/images/fast-food.png'),
    text: 'Fast Food',
  },
  deals: {
    image: require('../assets/images/images/deals.png'),
    text: 'Deals',
  },
  coffee: {
    image: require('../assets/images/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  desserts: {
    image: require('../assets/images/images/desserts.png'),
    text: 'Desserts',
  },
};

const styles = StyleSheet.create({
  categoryView: {
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 15,
    marginTop: 5,
  },
    categoryImage: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
