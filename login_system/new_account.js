import React, { useRef, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigation Screens
import LoadingScreen from '../login_system/loading_screen';

export default function NewAccount({ navigation: { navigate } }) {
    // Declared Values
    const [username, onChangeUsername] = useState('');
    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [phoneNumber, onChangePhoneNumber] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');

    return (
        <View style={styles.pageBackground}>
            <LinearGradient
                colors={['#1D2443','#38428B']}
                style={styles.pageBackground}
            >
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>New Account?</Text>
                    <Text style={styles.subHeaderTitle}>Lets get started with your account</Text>
                </View>


                {/* Input Fields */}
                <View style={styles.inputContainer}>

                    {/* Username Input */}
                    <View style={styles.userNameField}>
                        <Text style={styles.userNameTitle}>Username</Text>
                        <TextInput 
                            style={styles.textField}
                            value={username}
                            onChangeText={onChangeUsername}
                            placeholder={'Username'}
                        />
                            <View style={styles.imgContainer}>
                                <Image
                                    source={require('../assets/DividerLine.png')}
                                    style={styles.dividerLine}
                                />
                            </View>
                    </View>

                    {/* First Name */}
                    <View style={styles.firstNameField}>
                        <Text style={styles.firstNameTitle}>First Name</Text>
                        <TextInput 
                            style={styles.textField}
                            value={firstName}
                            onChangeText={onChangeFirstName}
                            placeholder={'First Name'}
                        />
                            <View style={styles.imgContainer}>
                                <Image
                                    source={require('../assets/DividerLine.png')}
                                    style={styles.dividerLine}
                                />
                            </View>
                    </View>

                    {/* Last Name */}
                    <View style={styles.lastNameField}>
                        <Text style={styles.lastNameTitle}>Last Name</Text>
                        <TextInput 
                            style={styles.textField}
                            value={lastName}
                            onChangeText={onChangeLastName}
                            placeholder={'Last Name'}
                        />
                            <View style={styles.imgContainer}>
                                <Image
                                    source={require('../assets/DividerLine.png')}
                                    style={styles.dividerLine}
                                />
                            </View>
                    </View>

                    {/* Phone Number */}
                    <View style={styles.phoneNumberField}>
                        <Text style={styles.phoneNumberTitle}>Phone Number</Text>
                        <TextInput 
                            style={styles.textField}
                            value={phoneNumber}
                            onChangeText={onChangePhoneNumber}
                            placeholder={'Phone Number'}
                            keyboardType={"phone-pad"}
                        />
                            <View style={styles.imgContainer}>
                                <Image
                                    source={require('../assets/DividerLine.png')}
                                    style={styles.dividerLine}
                                />
                            </View>
                    </View>

                    {/* Password */}
                    <View style={styles.passwordField}>
                        <Text style={styles.passwordTitle}>Password</Text>
                        <TextInput 
                            style={styles.textField}
                            value={password}
                            onChangeText={onChangePassword}
                            placeholder={'Password'}
                        />
                            <View style={styles.imgContainer}>
                                <Image
                                    source={require('../assets/DividerLine.png')}
                                    style={styles.dividerLine}
                                />
                            </View>
                    </View>

                    {/* Confirm Password */}
                    <View style={styles.confirmPasswordField}>
                        <Text style={styles.confirmPasswordTitle}>Confirm Password</Text>
                        <TextInput 
                            style={styles.textField}
                            value={confirmPassword}
                            onChangeText={onChangeConfirmPassword}
                            placeholder={'Confirm Password'}
                        />
                            <View style={styles.imgContainer}>
                                <Image
                                    source={require('../assets/DividerLine.png')}
                                    style={styles.dividerLine}
                                />
                            </View>
                    </View>
                </View>


                {/* Button Options */}
                <View style={styles.buttonContainer}>
                    <View style={styles.cancelCon}>
                        <Button 
                            title="Cancel"
                            color='white'
                            // onPress={() => navigate('ForgotAccount')}
                        />
                    </View>

                    <View style={styles.submitCon}>
                        <Button 
                            title="Submit"
                            color='white'
                            onPress={() => navigate('LoadingScreen')}     
                        />       
                    </View>
                </View>


            </LinearGradient>
        </View>
    )
}



const Stack = createNativeStackNavigator();

function LoginStack() {
  return(
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{headerShown: false}}
          > 
              <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    // Containers
        pageBackground: {
            backgroundColor: 'purple',
            flex: 1,
        },
        headerContainer: {
            marginTop: 80,
            marginBottom: 20,
            alignSelf: 'center',
            // backgroundColor: 'green',
        },
        inputContainer: {
            // backgroundColor: "red",
        },
        userNameField: {
            marginVertical: 15,
        },
        firstNameField: {
            marginVertical: 15,
        },
        lastNameField: {
            marginVertical: 15,
        },
        phoneNumberField: {
            marginVertical: 15,
        },
        passwordField: {
            marginVertical: 15,
        },
        password: {
            marginVertical: 15,
        },
        confirmPasswordField: {
            marginVertical: 15,
        },
        buttonContainer: {
            justifyContent: 'center',
            flexDirection: 'row',
            marginVertical: 30,
        },
        cancelCon: {
            backgroundColor: "#4D5C98",
            marginHorizontal: 30,
            paddingHorizontal: 10,
            maxHeight: 40,
            maxWidth: 100,
            borderRadius: 20,
        },
        submitCon: {
            backgroundColor: "#4D5C98",
            marginHorizontal: 30,
            maxHeight: 40,
            borderRadius: 20,
            paddingHorizontal: 10,
        },

    // Input Fields
        textField: {
            backgroundColor: 'rgba(0,0,0,0.2)',
            marginHorizontal: 20,
            borderRadius: 10,
            height: 40,
        },
        dividerLine: {
            marginLeft: 20,
            marginTop: 8,
        },
        firstNameField: {
            marginVertical: 15,
        },
        lastNameField: {
            marginVertical: 15,
        },
        userNameTitle: {
            marginVertical: 15,
        },
        phoneNumberTitle: {
            marginVertical: 15,
        },
        passwordTitle: {
            marginVertical: 15,
        },
        confirmPasswordTitle: {
            marginVertical: 15,
        },

    // Text
        headerTitle: {
            color: 'white',
            alignSelf: 'center',
            fontSize: 30,
            paddingBottom: 12,
            letterSpacing: 2,
        },
        subHeaderTitle: {
            color: 'white',
            alignSelf: 'center',
            fontSize: 15,
            paddingVertical: 5,
            letterSpacing: 1,
        },

    // Title 
        firstNameTitle: {
            marginLeft: 20, 
            marginBottom: 5,
            fontSize: 15,
            color: 'white',
            letterSpacing: 2,
        },
        lastNameTitle: {
            marginLeft: 20, 
            marginBottom: 5,
            fontSize: 15,
            color: 'white',
            letterSpacing: 2,
        },
        userNameTitle: {
            marginLeft: 20, 
            marginBottom: 5,
            fontSize: 15,
            color: 'white',
            letterSpacing: 2,
        },
        phoneNumberTitle: {
            marginLeft: 20, 
            marginBottom: 5,
            fontSize: 15,
            color: 'white',
            letterSpacing: 2,
        },
        passwordTitle: {
            marginLeft: 20, 
            marginBottom: 5,
            fontSize: 15,
            color: 'white',
            letterSpacing: 2,
        },
        confirmPasswordTitle: {
            marginLeft: 20, 
            marginBottom: 5,
            fontSize: 15,
            color: 'white',
            letterSpacing: 2,
        },
});