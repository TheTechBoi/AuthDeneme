import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';


const WelcomeScreen = ({ navigation: { navigate }}) => {

  const SignOut = () => {
    auth().signOut();
  };


  return(
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>

      <TouchableOpacity style={styles.bespokescreen_button} onPress={()=>navigate("Bespoke")}>
        <Text style={styles.bespokescreen_button_text}>Go To BespokeScreen</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.sign_button} onPress={()=>SignOut()}>
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
      bespokescreen_button: {
        backgroundColor: 'rgba(120,179,120,0.8)',
        padding: 15,
    },
      sign_button: {
        padding: 30
    },
      sign_button_text: {
        textAlign: 'center',
        color: '#000000'
      },
      bespokescreen_button_text: {
        fontSize: 15,
        textAlign: 'center',
        color: '#000000'
    }
});

export default WelcomeScreen;
