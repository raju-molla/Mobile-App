/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Funtion = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: 'rgb(0, 0, 255))'},
              styles.shadowContainer,
            ]}
            onPress={() => navigation.navigate('News')}>
            <FontAwesome5 name="newspaper" size={40} color="white" />
            {/* <Text style={styles.buttonText}>খবর</Text> */}
          </TouchableOpacity>
          <Text style={styles.buttonText}>খবর</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: 'rgb(255, 0, 0)'},
              styles.shadowContainer,
            ]}
            onPress={() => navigation.navigate('Emergency')}>
            <FontAwesome5 name="exclamation-triangle" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>জরুরি</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: 'rgb(255, 165, 0)'},
              styles.shadowContainer,
            ]}
            onPress={() => navigation.navigate('Complain')}>
            <FontAwesome5 name="comment" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>অভিযোগ</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: 'rgb(106, 90, 205)'},
              styles.shadowContainer,
            ]}
            onPress={() => navigation.navigate('Ambulance')}>
            <FontAwesome5 name="ambulance" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>অ্যাম্বুলেন্স</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: 'rgb(60, 179, 113)'},
              styles.shadowContainer,
            ]}
            onPress={() => navigation.navigate('Projects')}>
            <FontAwesome5 name="clipboard-list" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>পরিকল্পনা</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: 'rgb(238, 130, 238)'},
              styles.shadowContainer,
            ]}
            onPress={() => navigation.navigate('Event')}>
            <FontAwesome5 name="calendar-alt" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>ঘটনাবলী</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
    // width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    height: 80,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
  },
  shadowContainer: {
    // backgroundColor: 'white',
    borderRadius: 10, // Adjust the border radius as needed
    elevation: 9, // Android shadow (may not work on all Android versions)
    shadowColor: 'black', // iOS shadow
    shadowOffset: {width: 0, height: 2}, // iOS shadow
    shadowOpacity: 0.2, // iOS shadow
    shadowRadius: 4, // iOS shadow
    padding: 20,
    marginBottom: 4,
  },
});

export default Funtion;
