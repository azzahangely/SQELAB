import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const MainPage = () => {
    const handleNotification = () => {
      };
    
      const handleMenuButtonPress = (menuItem) => {
        
      };
    
      const handleNavigation = (screen) => {
      };
    
      const menuOptions = [
        { id: '1', name: 'All' },
        { id: '2', name: 'Social Media' },
        { id: '3', name: 'Option 3' },
        { id: '4', name: 'Option 4' },
        { id: '5', name: 'Option 5' },
        { id: '6', name: 'Option 6' },
        { id: '7', name: 'Option 7' },
        { id: '8', name: 'Option 8' },
      ];

      const renderMenuButtons = () => {
        const buttons = [];
        for (let i = 0; i < 8; i += 4) {
          buttons.push(
            <View key={`row_${i}`} style={styles.buttonRow}>
              {menuOptions.slice(i, i + 4).map((option) => (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => handleMenuButtonPress(option)}
                  style={styles.menuButton}
                >
                  <Text>{option.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        }
        return buttons;
      };

      return (
        <View style={styles.container}>
          <View style={styles.upperPart}>
            <Text style={styles.welcomeText}>Selamat Datang, Tom!</Text>
            <TouchableOpacity onPress={handleNotification}>
            <Image source={require('../assets/Notification.png')} />
            </TouchableOpacity>
            </View>

            <View style={styles.gridContainer}>{renderMenuButtons()}</View>
          
    
          {/* Footer Navigation Bar */}
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => handleNavigation('Home')}>
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigation('Profile')}>
              <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigation('Card')}>
              <Text>Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigation('Dashboard')}>
              <Text>Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#F2F3F7', // Adjust background color as needed
      },
      upperPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      gridContainer: {
        flex: 1,
        flexDirection: 'column',
        width: 355.568,
        height: 130.751,
        alignItems: 'center',
      },
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },

      menuButton: {
        width: 60,
        height: 60,
        borderRadius: '100%', // Half of the width and height to achieve an ellipsed shape
        backgroundColor: '#056580', // Example color, adjust as needed
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,

      },

      welcomeText: {
        fontSize: 16.4,
        fontWeight: 'bold',
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#CCCCCC', // Adjust border color as needed
        paddingBottom: 10,
      },
    });

export default MainPage

