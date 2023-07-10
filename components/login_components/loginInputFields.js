import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


export default function InputFields() {
    return (
        <>
            <View style={styles.inputContainer}>

                <View style={styles.emailField}>
                    <Text style={styles.emailFieldTitle}> Email Address </Text>
                    <TextInput
                        style={styles.textField}
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
    },
});