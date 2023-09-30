import React from 'react';
import {View, StyleSheet, Platform, Text, Image} from 'react-native';

const Header = () => {
  return (
    <View
      style={[styles.container, Platform.OS === 'ios' && styles.iosMarginTop]}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          জনগণের প্রিয় দল আওয়ামী লীগ
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginTop: Platform==='',
  },
  header: {
    // backgroundColor: '#fff', // Header background color
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  logo: {
    width: 60,
    height: 60,
  },
  iosMarginTop: {
    marginTop: 30, // Apply this margin on iOS
  },
});

export default Header;
