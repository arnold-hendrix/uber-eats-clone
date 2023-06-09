import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Account from '../screens/Account';
import Browse from '../screens/Browse';
import Carts from '../screens/Carts';
import Home from '../screens/Home';
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
        component={Browse}
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
        component={Carts}
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
        component={Account}
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
