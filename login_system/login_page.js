import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

function Login() {
    <View>
        /* Header */
        <View style={styles.headerContainer}>

          <Text>Proceed with</Text><Text>LOGIN</Text>
        </View>

        /* Input Fields */
        <View style={styles.inputContainer}>

            <View style={styles.emailField}>

            </View>

            <View style={styles.passwordField}>

            </View>
        </View>

        /* Login Options */
        <View>

            <View style={styles.loginButton}>

            </View>

            <View style={styles.forgotLink}>

            </View>

            <View style={styles.newUserLink}>

            </View>

        </View>


        /* Google & Facebook Login */
        <View>

            <View style={styles.googleLink}>

            </View>

            <View  style={styles.facebookLink}>

            </View>

        </View>
    </View>

}

const styles = StyleSheet.create({
    // Containers
    headerContainer: {

    },
    inputContainer: {

    },

    // Input Fields
    emailField: {

    },
    passwordField: {

    }
,
    // Buttons & Links
    loginButton: {

    },
    forgotLink: {

    },
    newUserLink: {

    },

});