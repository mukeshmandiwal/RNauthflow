import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LoginScreen} from '../screens';

const Stack = createStackNavigator();

export function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
