import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function Header() {
    return (
        <View>
            <View style={styles.headerContainer}>

                <View style={styles.imgContainer}>
                    <Image source={require('../assets/HeaderIcon.png')}></Image>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Proceed with</Text><Text style={styles.headerTextTwo}> LOGIN</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 60,
    },
    imgContainer: {
        alignSelf: 'center',
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
});