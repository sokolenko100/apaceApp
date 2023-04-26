import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '@helpers/rootNavigation';
import Login from '@screens/Login';
import ListOfSitesScreen from '@screens/ListOfSites';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Login.name}>
        <Stack.Screen
          name={Login.name}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ListOfSitesScreen.name}
          component={ListOfSitesScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigator};
