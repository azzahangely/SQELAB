import { View, Text, Linking, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
  
    const navigation = useNavigation();
  
    const handleBack = () => {
      navigation.goBack(); // Navigate back when the back button is pressed
    };
    const handleSend = () => {
        navigation.navigate('Login'); // Navigate back when the back button is pressed
      };
      const handleContactSupport = () => {
        const userEmail = 'SQELAB_Indonesia@Gmail.com';
        const subject = 'Support Request';
        const body = `Hello, SQELAB Indonesia! I'm [auto fill user's username], and I have a problem with the app..\n\n[DESCRIBE YOUR PROBLEM HERE]`;
    
        Linking.openURL(`mailto:${userEmail}?subject=${subject}&body=${body}`);
           };
  
    return (
      <View style={styles.container}>
  
        <TouchableOpacity style={styles.backButton}>
        <Image source={require('../assets/back-botton.png')} />
        </TouchableOpacity>

        <View style={styles.inputContainer}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>FIND YOUR ACCOUNT</Text>
          <Text style={styles.subtitle}>Enter the email, phone number, or username associated with your account to change your password.</Text>
        </View>
          
      
  
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#A1A4B2"
              value={email}
              onChangeText={setEmail}
            />
          </View>
  
        </View>
        
      <TouchableOpacity style={styles.sendNowButton} onPress={handleSend}>
        <Text style={styles.buttonText}>Send Now</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Still Having Trouble?</Text>
      <TouchableOpacity onPress={handleContactSupport}>
      <Text style={styles.text2}>Contact Our CS!</Text>

      </TouchableOpacity>
      </View>
    );
}

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
      fontSize: 13,
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

    sendNowButton: {
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
    text: {
        color: '#4E4E4E',
        fontSize: 13,
        marginTop: 16,
      },
      text2: {
        color: '#056580',
        fontSize: 13,
        marginTop: 16,
      }
  
  });

export default ForgotPassword
