import React from 'react';
import {View, StyleSheet, Platform, Text, ScrollView} from 'react-native';
import Funtion from '../component/Funtion';
import Header from '../component/Header';
import ImageSliderComp from '../component/ImageSlider';
import NoticeBoard from '../component/NoticeBoard';
import VideoSlider from '../component/VideoSlider';

const Home = ({navigation}) => {
  console.log(navigation.navigate);
  return (
    <View style={styles.container}>
      <Header />
      {/* <VideoSlider /> */}
      <ImageSliderComp />
      <NoticeBoard />
      <Funtion navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },
  iosMarginTop: {
    marginTop: 20,
  },
});

export default Home;
