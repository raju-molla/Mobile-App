import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import EmergencyButton from '../component/EmergencyButton';

function Emergency() {
  return (
    <View style={styles.container}>
      <EmergencyButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
export default Emergency;
