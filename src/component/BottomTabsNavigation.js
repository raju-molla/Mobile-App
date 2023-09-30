/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Livechat from '../screens/Livechat';
import EmergencyDail from '../screens/EmergencyDail';
import Notification from '../screens/Notification';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Splash from './Splash';
import News from '../screens/News';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Splasg" component={Splash} /> */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Livechat"
        component={Livechat}
        options={{
          tabBarLabel: 'Livechat',
          tabBarIcon: ({color, size}) => (
            <Icon name="chatbox" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="EmergencyDial"
        component={EmergencyDail}
        options={{
          tabBarLabel: 'Emergency Dail',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="contact-emergency" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
