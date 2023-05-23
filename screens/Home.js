import { SafeAreaView, View } from 'react-native';
import React from 'react';
import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={{padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <View>
        <Categories />
      </View>
    </SafeAreaView>
  );
}
