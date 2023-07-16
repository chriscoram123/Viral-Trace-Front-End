import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, } from 'react-native';


export default function InputFields() {
    // Declared variables
    const [emailAddress, onChangeEmailAddress] = useState('');
    const [passwordField, onChangePasswordField] = useState('');

    return (
        <>
            <View style={styles.inputContainer}>

                <View style={styles.emailField}>
                    <Text style={styles.emailFieldTitle}> Email Address </Text>
                    <TextInput
                        style={styles.textField}
                        value={emailAddress}
                        onChangeText={onChangeEmailAddress}
                        placeholder={'Email Address'}
                        keyboardType={'email-address'}
                    />
                    <Image
                        source={require('../../assets/DividerLine.png')}
                        style={styles.dividerLine}
                    />
                </View>

                <View style={styles.passwordField}>
                    <Text style={styles.passwordFieldTitle}> Password </Text>
                    <TextInput
                        style={styles.textField}
                        value={passwordField}
                        onChangeText={onChangePasswordField}
                        placeholder={'Password'}
                        multiline={true}
                        maxLength={250}
                        keyboardType={'default'}
                        secureTextEntry={true}
                    />
                    <Image
                        source={require('../../assets/DividerLine.png')}
                        style={styles.dividerLine}
                    />
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
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

    textField: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginHorizontal: 20,
        borderRadius: 10,
        height: 40,
        textAlign: "center",
    },
});