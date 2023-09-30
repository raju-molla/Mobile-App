import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSliderComp = () => {
  const images = [
    require('../assets/banner/4.jpeg'),
    require('../assets/banner/5.jpeg'),
    require('../assets/banner/6.jpeg'),
  ];

  return (
    <View style={styles.container}>
      <Swiper loop autoplay autoplayTimeout={5} showsPagination={false}>
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.customImage} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 20,
    height: 200,
  },
  slide: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
});

export default ImageSliderComp;
