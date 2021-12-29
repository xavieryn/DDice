import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from "../screens/Home";
import Spells from "../screens/Spells";
import Create from '../screens/Create.js';
import Compare from '../screens/Compare.js';
import Settings from '../screens/Settings.js';

const Tab = createMaterialBottomTabNavigator();

export default function NewBottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        barStyle={{ backgroundColor: '#231942' }}
        initialRouteName="Home"
        >
        <Tab.Screen 
        name="Spells" 
        component={Spells} 
        options={{tabBarIcon: 'fire', }} />
        <Tab.Screen name="Create"
         component={Create}
         options={{tabBarIcon: 'auto-fix', }}  />
        <Tab.Screen name="Home"
         component={Home}
         options={{tabBarIcon: 'home', }}  />
        <Tab.Screen name="Compare"
         component={Compare}
         options={{tabBarIcon: 'chart-bell-curve', }}  />
        <Tab.Screen name="Settings"
         component={Settings}
         options={{tabBarIcon: 'cog', }}  />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
