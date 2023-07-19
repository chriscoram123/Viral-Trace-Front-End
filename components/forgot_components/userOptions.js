import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigation Screens

export default function UserOptions() {
    return (
        <View style={styles.loginButtonsContainer}>
            <View style={styles.cancelCon}>
                    <Button 
                        title="Cancel"
                        color='white'
                    />
            </View>

            <View style={styles.submitCon}>
                    <Button 
                        title="Submit"
                        color='white'
                    />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    loginButtonsContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 40,
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
});