import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navigator from './routes/loginStack'

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
          
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Proceed with</Text><Text style={styles.headerTextTwo}> LOGIN</Text>
          </View>
        </View>

      {/* Input Fields */}
        <View style={styles.inputContainer}>

            <View style={styles.emailField}>
              <Text style={styles.emailFieldTitle}> Email Address </Text>
              <TextInput
                style={styles.textField}
              />
              <Image
                source={require('./assets/DividerLine.png')}
                style={styles.dividerLine}
              />
            </View>

            <View style={styles.passwordField}>
              <Text style={styles.passwordFieldTitle}> Password </Text>
              <TextInput
                style={styles.textField}
              />
              <Image
                source={require('./assets/DividerLine.png')}
                style={styles.dividerLine}
              />
            </View>
        </View>

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
                />
              </View>

              <View style={styles.newUserLink}>
                <Button 
                  title="New User?"
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
    headerContainer: {
      marginVertical: 60,
    },
    inputContainer: {
      // backgroundColor: "red",
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

  // Input Fields
    emailFieldTitle: {
      marginLeft: 15, 
      marginBottom: 5,
      fontSize: 16,
      color: 'white',
      letterSpacing: 2,
    },
    passwordFieldTitle: {
      marginLeft: 16, 
      marginBottom: 5,
      fontSize: 18,
      color: 'white',
      letterSpacing: 2,
    },
    emailField: {
      marginVertical: 10,
    },
    passwordField: {
      marginVertical: 10,
    },
    dividerLine: {
      marginLeft: 20,
      marginTop: 8,
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
    headerText: {
      color: 'white',
      textAlign: "center",
      fontSize: 25,
      letterSpacing: 2,
    },
    headerTextTwo: {
      color: 'white',
      textAlign: "center",
      fontSize: 25,
      letterSpacing: 2,
      fontWeight: 'bold',
    },
    textField: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      marginHorizontal: 20,
      borderRadius: 10,
      height: 40,
    },
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
