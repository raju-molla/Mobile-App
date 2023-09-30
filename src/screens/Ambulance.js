import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AmbulanceList from '../component/AmbulanceData';

function Ambulance() {
  return (
    <View style={styles.container}>
      <AmbulanceList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
export default Ambulance;
