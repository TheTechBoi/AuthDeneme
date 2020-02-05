import React, { useEffect } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

const HomeScreen = ({ navigation: { navigate }}) => {

  useEffect(() => firebase.auth().onAuthStateChanged(user => navigate(user ? "App" : "Auth")),[]);

  return(
    <View style={styles.container}>

      <Text style={styles.text}>Selam</Text>
      
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
    }
});

export default HomeScreen;
