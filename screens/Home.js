import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Categories from '../components/Categories';
import HeaderTab from '../components/HeaderTab';
import Restaurants, { localRestaurants } from '../components/Restaurants';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY =
  'vs0zZJcXczqwc-yrqQT_fjGu-g3ACc6RAiKWcXoiJ-966QtuTTru9jbbDFqgrB6jLHcon5YZOWIp2D9vcOaqoNS4YNeV3psbvOr89klvE9WZYhVpDgfq-W1p1Dh-ZHYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Toronto');
  const [error, setError] = useState(null);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses))
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  useEffect(() => {
    setCity("Toronto");
  }, [error]);
  
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView>
      <View style={{ padding: 15 }}>
        <HeaderTab />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <View
          style={{ backgroundColor: '#eee', paddingBottom: 8, paddingTop: 8 }}
        >
          <Restaurants restaurantData={restaurantData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
