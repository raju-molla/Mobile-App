import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const POLICE_NUMBER_LIST = [
  '312-235-641-542',
  '312-235-641-542',
  '312-235-641-542',
  '312-235-641-542',
];

const HOSPITAL_NUMBER_LIST = [
  '312-235-641-542',
  '312-235-641-542',
  '312-235-641-542',
  '312-235-641-542',
];

const FIRE_SERVICE_NUMBER_LIST = [
  '312-235-641-542',
  '312-235-641-542',
  '312-235-641-542',
  '312-235-641-542',
  '312-235-641-542',
  '312-235-641-542',
];

const EmergencyDial = () => {
  const [emergencyNumbers, setEmergencyNumbers] = useState([]);

  useEffect(() => {
    const combinedEmergencyNumbers = [
      ...POLICE_NUMBER_LIST,
      ...HOSPITAL_NUMBER_LIST,
      ...FIRE_SERVICE_NUMBER_LIST,
    ];

    setEmergencyNumbers(combinedEmergencyNumbers);
  }, []);

  const handleContactPress = contact => {
    Alert.alert(
      'Call Confirmation',
      `Are you sure you want to call (${contact})?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Call',
          onPress: () => {
            Linking.openURL(`tel:${contact.replace(/-/g, '')}`);
          },
        },
      ],
    );
  };

  const renderEmergencyNumber = item => (
    <TouchableOpacity
      onPress={() => {
        handleContactPress(item);
      }}
      style={styles.emergencyNumberContainer}>
      <Text style={styles.emergencyNumberText}>{item}</Text>
      <FontAwesomeIcon
        onPress={() => handleContactPress(item)}
        name="phone"
        size={30}
        color="#007AFF"
        style={styles.phoneIcon}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Numbers</Text>

      <Text style={styles.emergencyNumberSectionTitle}>Police</Text>
      <FlatList
        data={POLICE_NUMBER_LIST}
        renderItem={({item}) => renderEmergencyNumber(item)}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.emergencyNumberSectionTitle}>Hospital</Text>
      <FlatList
        data={HOSPITAL_NUMBER_LIST}
        renderItem={({item}) => renderEmergencyNumber(item)}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.emergencyNumberSectionTitle}>Fire Service</Text>
      <FlatList
        style={styles.FlatList}
        data={FIRE_SERVICE_NUMBER_LIST}
        renderItem={({item}) => renderEmergencyNumber(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  emergencyNumberSectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    // textAlign: 'center',
    padding: 10,
    margin: 5,
    color: 'black',
  },
  emergencyNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  emergencyNumberText: {
    fontSize: 16,
    color: 'black',
  },
  phoneIcon: {
    paddingLeft: 10,
  },
});

export default EmergencyDial;
