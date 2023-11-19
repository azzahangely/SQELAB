import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    Alert.alert('Login Successful', `Welcome, ${username}!`);
    navigation.navigate('Home'); 
  };

  const handleForgotPass = () =>{
    navigation.navigate('ForgotPass'); 

  }
  const handleSignUp = () => {
    navigation.navigate('Register'); 
  }

  const handleGoogleSignIn = () => {
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/SQELAB_Logo.png')} />
      <Image source={require('../assets/login_img.png')} />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleForgotPass}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText2}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>Don't Have an account? Sign Up!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    color: '#FFFFF'
  },

  signUpText: {
    marginTop: 8,
    marginBottom: 16,
    color: '#056580',
    textDecorationLine: 'underline',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 50,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#056580',
    marginBottom: 16,
  },

  buttonText: {
    color: '#056580',
    fontWeight: 'bold',
  },

  buttonText2: {
    color: '#F6F1FB',
    fontWeight: 'bold',
  },

  input: {  
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#F2F3F7',
    borderWidth: 1,
    borderRadius:14,
    width: 365,
  //  marginTop:30,
    marginBottom: 16,
    padding: 8,
    height:60,
    
  },
  forgotPasswordText: {
    textAlign: 'right',
    marginBottom: 16,
    color: '#056580',
    fontWeight: 'bold',
    width: '100%',
  },
  
  loginButton: {
    backgroundColor: '#056580',
    padding: 12,
    borderRadius: 50,
    height: 60,
    width: '100%',
    alignItems: 'center',
  },
});

export default LoginPage;
