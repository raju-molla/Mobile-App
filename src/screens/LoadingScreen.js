import React, {useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';

const LoadingScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true, // For better performance
    }).start(() => {
      // Animation has completed; you can navigate to another screen or perform other actions here
      // Example: navigation.navigate('Home');
    });
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <Image
        source={require('../assets/splash.jpeg')}
        style={styles.loadingImage}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // You can set the background color as per your app's design
  },
  loadingImage: {
    width: '100%', // Adjust the width and height according to your image size
    height: '100%',
  },
});

export default LoadingScreen;
