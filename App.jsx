import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/component/BottomTabsNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from './src/screens/News';
import Emergency from './src/screens/Emergency';
import Complain from './src/screens/Complain';
import Ambulance from './src/screens/Ambulance';
import Projects from './src/screens/Projects';
import Event from './src/screens/Event';
import SinglePost from './src/screens/SinglePost';
import {View, Image, StyleSheet} from 'react-native';
import LoadingScreen from './src/screens/LoadingScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Stack.Navigator initialRouteName="BottomTabNavigator">
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Emergency" component={Emergency} />
          <Stack.Screen name="Complain" component={Complain} />
          <Stack.Screen name="Ambulance" component={Ambulance} />
          <Stack.Screen name="Projects" component={Projects} />
          <Stack.Screen name="Event" component={Event} />
          <Stack.Screen name="Post" component={SinglePost} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
