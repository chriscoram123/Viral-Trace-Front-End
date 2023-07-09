import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navigator from './routes/loginStack'
import { NavigationContainer } from '@react-navigation/native';

import InputFields from './components/loginInputFields';
import Header from './components/header';

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
        <View style={styles.loginButtonsContainer}>
            <View style={styles.loginCon}>
              {/* <LinearGradient
                colors={['#B7D0FF', 'B7B7FF']}
              > */}
                <Button 
                  title="Login"
                  color='white'
                />
              {/* </LinearGradient> */}
            </View>
            
            <View style={styles.supportContainer}>
              <View style={styles.forgotLink}>
                <Button 
                  title="Forgot?"
                  onPress={() => navigation.navigate(ForgotAccount)
                  }
                />
              </View>

              <View style={styles.newUserLink}>
                <Button 
                  title="New User?"
                  onPress={() => navigation.navigate(NewAccount)
                  }
                />
              </View>
            </View>

        </View>

      {/* Google & Facebook Login */}
      <Text style={styles.footerText}>Also Login With</Text>

        <View style={styles.socialButtonsContainer}>
            <View style={styles.googleLinkContainer}>
              {/* <Button 
                title="Forgot?"
                style={styles.googleLink}
              /> */}
                <Image source={require('./assets/GoogleBtn.png')} />
            </View>

            <View  style={styles.facebookLinkContainer}>
              {/* <Button 
                title="New User?"
                style={styles.facebookLink}
              /> */}
                <Image source={require('./assets/FacebookBtn.png')} />
            </View>
        </View>
    </LinearGradient>
    </View>
  )
}


const styles = StyleSheet.create({
  // Containers
    pageBackground: {
      backgroundColor: 'purple',
      flex: 1,
    },
    socialButtonsContainer: {
      marginVertical: 20,
      // marginHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    loginButtonsContainer: {
      marginTop: 50,
      marginBottom: 30,
    },
    googleLinkContainer: {
      marginVertical: 10,
      marginHorizontal: 40,
      // backgroundColor: "#4D5C98",
      height: 60,
      maxWidth: 100,
      // borderRadius: 20,
    },
    facebookLinkContainer: {
      marginVertical: 10,
      marginHorizontal: 40,
      // backgroundColor: "#4D5C98",
      height: 60,
      maxWidth: 100,
      // borderRadius: 100,
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
    loginCon: {
      backgroundColor: "#4D5C98",
      marginHorizontal: 130,
      height: 40,
      borderRadius: 20,
    },
    supportContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 15,
    },

  // Buttons & Links
    loginButton: {
      backgroundColor: 'white',
    },
    forgotLink: {
      marginHorizontal: 35,
    },
    newUserLink: {
      marginHorizontal: 20,
    },

  // Text
    footerText: {
      fontSize: 18,
      color: 'white',
      textAlign: "center",      
      letterSpacing: 2,
    },
    googleLink: {

    },
    facebookLink: {

    },

  // Images
    imgContainer: {
      alignSelf: 'center',
    },
});
