import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

const EventCard = ({events}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.eventCard}>
            <Image source={{uri: item.image}} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  eventDate: {
    fontSize: 16,
    color: 'gray',
  },
  eventDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default EventCard;
