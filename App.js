import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function Login() {
  return (
    <View style={styles.pageBackground}>
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
        <View>

            <View style={styles.loginButton}>

            </View>

            <View style={styles.forgotLink}>

            </View>

            <View style={styles.newUserLink}>

            </View>

        </View>

      {/* Google & Facebook Login */}
        <View>

            <View style={styles.googleLink}>

            </View>

            <View  style={styles.facebookLink}>

            </View>

        </View>
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
        backgroundColor: "blue",
        marginVertical: 50,
    },
    inputContainer: {

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
      color: 'black',
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
