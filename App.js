import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import BreakingNews from './components/BreakingNews';
import SavedNews from './components/SavedNews';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Text } from 'react-native';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon 
                name="home-outline" 
                size={25} 
                color={focused ? 'red' : 'gray'} // Change to red when active
              />
            ),
            tabBarLabel: () => (
              <Text style={{ color: 'gray' }}>Etusivu</Text> // Keep label gray
            ),
          }}
        />
        <Tab.Screen 
          name="Tuoreimmat" 
          component={BreakingNews} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon 
                name="newspaper-outline" 
                size={25} 
                color={focused ? 'red' : 'gray'} // Change to red when active
              />
            ),
            tabBarLabel: () => (
              <Text style={{ color: 'gray' }}>Tuoreimmat</Text> // Keep label gray
            ),
          }} 
        />
        <Tab.Screen 
          name="Tallennetut" 
          component={SavedNews} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon 
                name="bookmark-outline" 
                size={25} 
                color={focused ? 'red' : 'gray'} // Change to red when active
              />
            ),
            tabBarLabel: () => (
              <Text style={{ color: 'gray' }}>Tallennetut</Text> // Keep label gray
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}