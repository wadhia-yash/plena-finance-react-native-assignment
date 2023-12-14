import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
  BottomTabHeaderProps,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import HomeScreen from '@/screens/home/home';
import CategoriesScreen from '@/screens/categories/categories';
import FavouritesScreen from '@/screens/favourites/favourites';
import TabButton from '@/components/molecule/tab-button/tab-button';
import HomeHeader from '@/components/molecule/home-header/home-header';
import FavouriteHeader from '@/components/molecule/favourite-header/favourite-header';

const Tab = createBottomTabNavigator();

const BottomTabStackNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          header: (props: BottomTabHeaderProps) => <HomeHeader {...props} />,
          tabBarShowLabel: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabButton label="Home" size={24} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabButton label="Categories" size={24} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritesScreen}
        options={{
          headerShown: true,
          header: (props: BottomTabHeaderProps) => (
            <FavouriteHeader {...props} />
          ),
          tabBarShowLabel: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabButton label="Favourite" size={24} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={FavouritesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabButton name="heart" size={24} {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 73,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
  },
});

export default BottomTabStackNavigator;
