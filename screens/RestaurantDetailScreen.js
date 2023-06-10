import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from '@rneui/themed';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';

export default function RestaurantDetailScreen( {route, navigation} ) {
  return (
    <View>
      <About route={route} navigation={navigation}/>
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}

const styles = StyleSheet.create({});
