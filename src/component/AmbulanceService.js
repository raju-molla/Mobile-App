import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const AmbulanceService = ({service}) => {
  const handleContactPress = contact => {
    Alert.alert(
      'Call Confirmation',
      `Are you sure you want to call (${contact.phone})?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Call',
          onPress: () => {
            Linking.openURL(`tel:${contact.phone}`);
          },
        },
      ],
    );
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: service.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.name}>{service.name}</Text>
          <Text style={styles.phone}>{service.phone}</Text>
          <Text style={styles.location}>{service.location}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            onPress={() => handleContactPress(service)}
            name="phone"
            size={40}
            color="#007AFF"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row', // Ensure icon and text are in the same row
    justifyContent: 'space-around',
    alignItems: 'center', // Vertically align icon and text
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  phone: {
    fontSize: 16,
    color: 'gray',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  iconContainer: {
    marginLeft: 10, // Add margin to the left of the call icon for spacing
    // marginRight: '20px',
  },
});

export default AmbulanceService;
