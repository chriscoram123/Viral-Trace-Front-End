import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Forgot Account?</Text>
            <Text style={styles.subHeaderTitle}>Choose any one of the following to recover</Text>
            <Text style={styles.subHeaderTitleTwo}>your account.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 100,
        marginBottom: 50,
        alignSelf: 'center',
        // backgroundColor: 'green',
    },
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
    subHeaderTitleTwo: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
        letterSpacing: 1,
    },
});