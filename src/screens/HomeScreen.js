import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View,} from 'react-native';
import auth from '@react-native-firebase/auth';


const HomeScreen = ({ navigation: { navigate }}) => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [userr, setUser] = useState(false);
   
    // Handle user state changes
    async function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
   
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      
      navigate(userr ? "App" : "Auth");
      console.log(userr)
      return subscriber; // unsubscribe on unmount
      

    }, []);


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
