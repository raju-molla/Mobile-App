import React from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';
import ChatButton from '../component/ChatButton';

const Livechat = () => {
  return (
    <View>
      <ChatButton />
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

export default Livechat;
