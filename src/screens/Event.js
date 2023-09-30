import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import EventCard from '../component/EventCard';
const events = [
  {
    id: '1',
    title: 'নির্বাচন ',
    date: 'September 15, 2023',
    description: 'This is event 1 description.',
    image:
      'https://i.ytimg.com/vi/1kDkOUFKlko/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBDVNtIqTu2D879LeOCEroJMfp_7A',
  },
  {
    id: '2',
    title: 'Event 2',
    date: 'October 10, 2023',
    description: 'This is event 2 description.',
    image: 'https://i.ytimg.com/vi/AIUaB7QQGIg/maxresdefault.jpg',
  },
  {
    id: '3',
    title: 'Event 2',
    date: 'October 10, 2023',
    description: 'This is event 2 description.',
    image:
      'https://ecdn.dhakatribune.net/contents/cache/images/1100x618x1/uploads/media/2023/09/11/Hasina-Macron-d9f9e3e4dd4f9280bc6c8f6784471f82.jpg?jadewits_media_id=4056',
  },
  {
    id: '4',
    title: 'Event 2',
    date: 'October 10, 2023',
    description: 'This is event 2 description.',
    image: 'https://i.ytimg.com/vi/AIUaB7QQGIg/maxresdefault.jpg',
  },
  // Add more event data here
];
function Event() {
  return (
    <View style={styles.container}>
      <EventCard events={events} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
export default Event;
