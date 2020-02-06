import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';


const WelcomeScreen = () => {

  const SignOut = () => {
    auth().signOut();
  };


  return(
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>

      <TouchableOpacity style={styles.sign_button} onPress={SignOut()}>
        <Text style={styles.sign_button_text}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 30,
    alignSelf: 'center'
  },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
  sign_button: {
    
    },
    sign_button_text: {
      textAlign: 'center',
      color: '#000000'
    }
});

export default WelcomeScreen;
