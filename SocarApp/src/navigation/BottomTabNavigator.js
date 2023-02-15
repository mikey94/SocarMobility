/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import Home from '../features/home/Home';
import Cars from '../features/cars/Cars';
import Profile from '../features/profile/Profile';
import Settings from '../features/settings/Settings';
import Routes from '../constants/routes';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === Routes.HOME) {
          iconName = 'home';
        }
        if (route.name === Routes.CARS) {
          iconName = 'directions-car';
        }
        if (route.name === Routes.PROFILE) {
          iconName = 'supervised-user-circle';
        }
        if (route.name === Routes.SETTINGS) {
          iconName = 'settings';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    >
      <Tab.Screen name={Routes.HOME} component={Home} />
      <Tab.Screen name={Routes.CARS} component={Cars} />
      <Tab.Screen name={Routes.PROFILE} component={Profile} />
      <Tab.Screen name={Routes.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
