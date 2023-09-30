import React from 'react';
import {View, Button, Text, Linking, TouchableOpacity} from 'react-native';
import Share from 'react-native-share';
import Clipboard from '@react-native-clipboard/clipboard';

const ChatButton = () => {
  const handleWhatsApp = phoneNumber => {
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}`;
    Linking.canOpenURL(whatsappURL)
      .then(supported => {
        if (supported) {
          return Linking.openURL(whatsappURL);
        } else {
          console.error('WhatsApp is not installed on your device.');
        }
      })
      .catch(error => {
        console.error('An error occurred while opening WhatsApp:', error);
      });
  };

  //   Share
  const options = {
    social: Share.Social.WHATSAPP,
    message: 'Hello, I want to chat with you!', // Replace with your desired message
  };

  const share = () => {
    Share.shareSingle(Object.assign(options, {}))
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <View>
      <Button title="Link to open WhatsApp" onPress={share} />
      <Text>Phone Number: {8801703634507}</Text>
      <TouchableOpacity onPress={() => handleWhatsApp(8801703634507)}>
        <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
          Click to Call
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatButton;
