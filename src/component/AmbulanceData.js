// AmbulanceList.js
import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import AmbulanceService from './AmbulanceService';
// import AmbulanceService from './AmbulanceService';

const ambulanceData = [
  {
    id: '1',
    name: 'Ambulance Service 1',
    phone: '123-456-7890',
    location: 'City 1',
    image:
      'https://files.globalgiving.org/pfil/38052/pict_large.jpg?m=1547654740000',
  },
  {
    id: '2',
    name: 'Ambulance Service 1',
    phone: '123-456-7890',
    location: 'City 1',
    image:
      'https://files.globalgiving.org/pfil/38052/pict_large.jpg?m=1547654740000',
  },
  {
    id: '3',
    name: 'Ambulance Service 1',
    phone: '123-456-7890',
    location: 'City 1',
    image:
      'https://files.globalgiving.org/pfil/38052/pict_large.jpg?m=1547654740000',
  },
  {
    id: '4',
    name: 'Ambulance Service 1',
    phone: '123-456-7890',
    location: 'City 1',
    image:
      'https://files.globalgiving.org/pfil/38052/pict_large.jpg?m=1547654740000',
  },
  {
    id: '5',
    name: 'Ambulance Service 1',
    phone: '123-456-7890',
    location: 'City 1',
    image:
      'https://files.globalgiving.org/pfil/38052/pict_large.jpg?m=1547654740000',
  },
  {
    id: '6',
    name: 'Ambulance Service 1',
    phone: '123-456-7890',
    location: 'City 1',
    image:
      'https://files.globalgiving.org/pfil/38052/pict_large.jpg?m=1547654740000',
  },
  {
    id: '7',
    name: 'Ambulance Service 1',
    phone: '123-456-7890',
    location: 'City 1',
    image:
      'https://files.globalgiving.org/pfil/38052/pict_large.jpg?m=1547654740000',
  },
];

const AmbulanceList = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/banner/5.jpeg')}
        style={styles.bannerImage}
      />
      <FlatList
        data={ambulanceData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <AmbulanceService service={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default AmbulanceList;
