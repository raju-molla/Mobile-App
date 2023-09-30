import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  FlatList,
  Linking,
  Image,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const EmergencyDailComp = () => {
  const contacts = [
    {id: '1', name: 'জরুরী সেবা', number: '01798823797'},
    {id: '2', name: 'বাংলাদেশ পুলিশ', number: '999'},
    {id: '3', name: 'ফায়ার সার্ভিস', number: '0631-63433'},
    {id: '4', name: 'Your Phone Number', number: '8801703634507'},
    // Add more emergency contacts here
  ];

  const handleContactPress = contact => {
    Alert.alert(
      'Call Confirmation',
      `Are you sure you want to call ${contact.name} (${contact.number})?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Call',
          onPress: () => {
            Linking.openURL(`tel:${contact.number}`);
          },
        },
      ],
    );
  };

  const renderContactItem = ({item}) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => handleContactPress(item)}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.number}</Text>
      </View>
      <FontAwesomeIcon name="phone" size={20} color="#007AFF" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/banner/5.jpeg')}
        style={styles.bannerImage}
      />
      <Text style={styles.bannerText}>জরুরি সেবায় নিয়োজিত</Text>
      <FlatList
        style={styles.contactList}
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderContactItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  contactList: {
    width: '100%',
    paddingHorizontal: 20,
  },
  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 16,
    color: 'black',
  },
});

export default EmergencyDailComp;
