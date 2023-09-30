import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ComplaintForm from '../component/ComplaintForm';
function Complain() {
  return (
    <View style={styles.container}>
      <ComplaintForm />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default Complain;
