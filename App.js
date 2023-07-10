import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navigator from './routes/loginStack'
import { NavigationContainer } from '@react-navigation/native';

import InputFields from './components/loginInputFields';
import Header from './components/header';
import LoginOptions from './components/loginOptions';
import SocialLogin from './components/socialLogin';

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
    textContainer: {
      marginVertical: 20,
      paddingVertical: 0,
      // backgroundColor: "green",
      flexDirection: "row",
      justifyContent: "center",
      position: "relative",
      top: 40,
    },

});
