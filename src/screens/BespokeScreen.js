import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app'
import { firebase } from '@react-native-firebase/firestore';

// Read the document for user 'Ada Lovelace':
const logBaba = async () => { //Cemalin aksiyonları
  const documentSnapshot = await firebase.firestore()
  .collection('users')
  .doc('alovelace')
  .get();

  console.dir(documentSnapshot.data());
}
const BespokeScreen = () => {
  


  const check = () => {
    try{
    console.log(ref);
    }
    catch(e)
    {
      console.log(e)
    } 
    } 

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Items:</Text>
      <Text style={styles.text2}>Agla Yikik</Text>

      <Button title={"Deneme"} onPress={()=> logBaba()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 5,
    
  },
  text2: {
    fontSize: 20,
    padding: 5,
    
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

export default BespokeScreen;
