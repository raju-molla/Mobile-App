import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import ImageSlider from 'react-native-image-slider';

const VideoSlider = () => {
  const images = [
    require('../assets/banner/1.jpg'),
    require('../assets/banner/2.jpeg'),
    require('../assets/banner/3.jpeg'),
  ];

  return (
    <View style={styles.container}>
      <ImageSlider
        loopBothSides
        autoPlayWithInterval={2000}
        images={images}
        customSlide={({index, item, style}) => (
          <View key={index} style={[style, styles.customSlide]}>
            <Image source={item} style={styles.customImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  customSlide: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
});

export default VideoSlider;
