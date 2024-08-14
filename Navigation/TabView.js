import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Welcome from '../Screen/Welcome';
import UserInfo from '../Screen/UserInfo';

const Tab = createBottomTabNavigator();

export default function TabView() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{keyboardHidesTabBar:true}}
        >
        <Tab.Screen
          name="Home"
          component={Welcome}
          options={{
            tabBarLabel: 'Welcome',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={UserInfo}
          options={{
            
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <FontAwesome6 name="user-large" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
