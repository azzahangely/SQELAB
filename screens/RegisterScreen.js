import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack(); // Navigate back when the back button is pressed
  };

  const handleSignUp = () => {
    if (email === '' || password === '' || phoneNumber === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Sign Up Successful', 'It\'s quick and easy!');
  };

  const handleSignIn = () => {
    navigation.navigate('Login'); 
    };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton}>
      <Image source={require('../assets/back-botton.png')} />
      </TouchableOpacity>



      <View style={styles.inputContainer}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>SIGN UP</Text>
        <Text style={styles.subtitle}>It's quick and easy.</Text>
      </View>
        
    

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#A1A4B2"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#A1A4B2"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#A1A4B2"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.signInText}>Already have your account? Sign In!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centerAligned: {
    width: '100%',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    paddingTop: 40, // Adjust the paddingTop to position the back button below the status bar
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 1, 
  
  },

  titleContainer: {
    alignSelf: 'flex-start',
    marginBottom: 24,
  },

  title: {
    fontSize: 22.478,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24.299, 
    letterSpacing: 1.124,
  },

  subtitle: {
    color: '#979797',
    fontSize: 16.859,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18.224, // You might need to adjust this value based on your design
    letterSpacing: 0.843,
  },
  
  input: {
    width: 352.986,
    height: 59.601,
    flexShrink: 0,
    borderRadius: 14.049,
    backgroundColor: '#F2F3F7',
    marginBottom: 16,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%', // Adjust width as needed
    marginBottom: 16,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    marginBottom: 4,
    color: '#979797', // Adjust label color as needed
  },
  signUpButton: {
    backgroundColor: '#056580',
    padding: 12,
    borderRadius: 50,
    height: 60,
    width: 352.986,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 16,
    color: '#056580',
    textDecorationLine: 'underline',
  },

});

export default RegisterScreen;
