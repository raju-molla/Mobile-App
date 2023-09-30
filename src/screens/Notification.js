import React from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';

const Notification = () => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iosMarginTop: {
    marginTop: 20,
  },
});

export default Notification;
