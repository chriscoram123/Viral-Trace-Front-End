import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

import Navigator from '../../routes/loginStack';
import { NavigationContainer } from '@react-navigation/native';

export default function LoginOption() {
    return (
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
    )
}

const styles = StyleSheet.create({
    loginButtonsContainer: {
        marginTop: 50,
        marginBottom: 30,
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
    forgotLink: {
        marginHorizontal: 35,
    },
    newUserLink: {
        marginHorizontal: 20,
    },
});