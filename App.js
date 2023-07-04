import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  return (
    <View style={styles.pageBackground}>
      <LinearGradient
        colors={['#1D2443','#38428B']}
        style={styles.pageBackground}
      >
      {/* Header */}
        <View style={styles.headerContainer}>

          <View style={styles.imgContainer}>
            <Image 
              source={require('./assets/HeaderIcon.png')}
            ></Image>
          </View>
          
          <Text style={styles.headerText}>Proceed with</Text><Text style={styles.headerText}>LOGIN</Text>
        </View>

      {/* Input Fields */}
        <View style={styles.inputContainer}>

            <View style={styles.emailField}>
              <Text style={styles.emailFieldTitle}> Email Address </Text>
              <TextInput
                style={styles.textField}
              />
            </View>

            <View style={styles.passwordField}>
              <Text style={styles.passwordFieldTitle}> Password </Text>
              <TextInput
                style={styles.textField}
              />
            </View>
        </View>

      {/* Login Options */}
        <View style={styles.loginButtonContainer}>
            <View style={styles.loginButton}>
              <Button 
                title="Learn More"
              />
            </View>

            <View style={styles.forgotLink}>

            </View>

            <View style={styles.newUserLink}>

            </View>

        </View>

      {/* Google & Facebook Login */}
        <View style={styles.socialButtonsContainer}>
            <View style={styles.googleLinkContainer}>
              <Button 
                title="Learn More"
                style={styles.googleLink}
              />
            </View>

            <View  style={styles.facebookLinkContainer}>
              <Button 
                title="Learn More"
                style={styles.facebookLink}
              />
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
    headerContainer: {
      marginVertical: 60,
    },
    inputContainer: {

    },
    socialButtonsContainer: {
      backgroundColor: "violet",
      marginVertical: 50,
    },
    loginButtonContainer: {
      marginVertical: 50,
    },
    googleLinkContainer: {
      marginVertical: 10,
    },
    facebookLinkContainer: {
      marginVertical: 10,
    },

  // Input Fields
    emailFieldTitle: {
      marginLeft: 15, 
    },
    passwordFieldTitle: {
      marginLeft: 15, 
    },
    emailField: {
      marginVertical: 10,
    },
    passwordField: {
      marginVertical: 10,
    },

  // Buttons & Links
    loginButton: {

    },
    forgotLink: {

    },
    newUserLink: {

    },

  // Text
    headerText: {
      color: 'white',
      textAlign: "center",
      fontSize: 25,
    },
    textField: {
      backgroundColor: 'green',
      marginHorizontal: 20,
    },

  // Images
    imgContainer: {
      alignSelf: 'center',
    },
});
