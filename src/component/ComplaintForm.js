import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const ComplaintForm = () => {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = () => {
    console.log('Submitted Complaint:', complaint);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/banner/4.jpeg')}
        style={styles.bannerImage}
      />
      <Text style={styles.label}>
        নিচে আপনার অভিযোগ উল্লেখ করুন। আপনাদের সহযোগিতার আমারা সব সময় পাশে আছি।
        ভালো থাকবেন পাশে থাকবেন জয় বাংলা
      </Text>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.input}
        value={complaint}
        placeholder="text here"
        onChangeText={text => setComplaint(text)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // padding: 20,
  },
  bannerImage: {
    width: '100%', // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: 'black',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ComplaintForm;
