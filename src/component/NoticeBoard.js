import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import TextTicker from 'react-native-text-ticker';

const NoticeBoard = () => {
  return (
    <View style={styles.container}>
      <TextTicker
        style={{fontSize: 24}}
        duration={10000}
        loop
        bounce
        repeatSpacer={0}
        marqueeDelay={1000}>
        আওয়ামী লীগ যখনই ক্ষমতায় আসে দেশের উন্নয়ন করে। – প্রধানমন্ত্রী শেখ
        হাসিনা
      </TextTicker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'green',
  },
});

export default NoticeBoard;
