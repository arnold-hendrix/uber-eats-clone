import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AccountScreen from '../../screens/AccountScreen';
import BrowseScreen from '../../screens/BrowseScreen';
import CartScreen from '../../screens/CartScreen';
import Home from './Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        initialRouteName: 'Home',
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: 700,
        },
        tabBarStyle: {
          height: 85,
          backgroundColor: '#eee',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={'home'}
              size={23}
              color={focused ? 'black' : '#666'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={'search'}
              size={23}
              color={focused ? 'black' : '#666'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={'shopping-cart'}
              size={23}
              color={focused ? 'black' : '#666'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={'user'}
              size={23}
              color={focused ? 'black' : '#666'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
