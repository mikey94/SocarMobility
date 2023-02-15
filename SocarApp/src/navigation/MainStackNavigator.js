import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../features/intro/Intro';
import BottomTabNavigator from './BottomTabNavigator';
import Routes from '../constants/routes';
import AddCar from '../features/add-car/AddCar';
import FleetDetails from '../features/cars/fleetDetails/FleetDetails';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => ({
          headerShown: false,
        })}
        name={Routes.INTRO}
        component={Intro}
      />
      <Stack.Screen
        options={() => ({
          headerShown: false,
        })}
        name={Routes.MAIN}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        options={() => ({
          headerTitle: 'Add New Fleet',
          headerTransparent: true,
        })}
        name={Routes.ADD_CAR}
        component={AddCar}
      />
      <Stack.Screen
        options={() => ({
          headerTitle: 'Fleet Details',
          headerTransparent: true,
        })}
        name={Routes.CAR_DETAILS}
        component={FleetDetails}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
