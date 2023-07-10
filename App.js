import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navigator from './routes/loginStack'
import { NavigationContainer } from '@react-navigation/native';

import InputFields from './components/login_components/loginInputFields';
import Header from './components/login_components/header';
import LoginOptions from './components/login_components/loginOptions';
import SocialLogin from './components/login_components/socialLogin';

export default function Login({ navigation }) {
  return (
    <View style={styles.pageBackground}>
      <LinearGradient
        colors={['#1D2443','#38428B']}
        style={styles.pageBackground}
      >
        {/* Header */}
        <Header></Header>

        {/* Input Fields */}
        <InputFields></InputFields>

        {/* Login Options */}
        <LoginOptions></LoginOptions>

        {/* Google & Facebook Login */}
        <SocialLogin></SocialLogin> 

      </LinearGradient>
    </View>
  )
}


const styles = StyleSheet.create({
  // Containers
    pageBackground: {
      flex: 1,
    },
});
