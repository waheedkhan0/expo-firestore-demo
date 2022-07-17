import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../config/firebase';
import {loggingOut} from '../../api/firebase';
import styles from './styles';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import 'firebase/database';

export default function Dashboard({ navigation }) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    let isMounted = true;
    getUserInfo();
    return () => {
      isMounted = false;
    }
  });

    async function getUserInfo(){
      let doc = await firebase
      .firestore()
      .collection('users')
      .doc(currentUserUID)
      .get();

      if (!doc.exists){
        Alert.alert('No user data found!')
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName);
        setEmail(dataObj.email);
      }
    }

  // useEffect(() => {
  //   getUserInfo();
  // })

  const handlePress = () => {
    loggingOut();
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Dashboard</Text>
      <Text style={styles.text}>Hi {firstName}</Text>
      <Text style={styles.text}>with email {email}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}