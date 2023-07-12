import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';


export default function InputFields() {
    return (
        <View style={styles.inputContainer}>
            {/* Username Input */}
            <View style={styles.userNameField}>
                <Text style={styles.userNameTitle}>Username</Text>
                <TextInput style={styles.textField} />
                    <View style={styles.imgContainer}>
                        <Image
                            source={require('../../assets/DividerLine.png')}
                            style={styles.dividerLine}
                        />
                    </View>
            </View>

            {/* Email Address */}
            <View style={styles.emailAddressField}>
                <Text style={styles.emailAddressTitle}>Email Address</Text>
                <TextInput style={styles.textField} />
                    <View style={styles.imgContainer}>
                        <Image
                            source={require('../../assets/DividerLine.png')}
                            style={styles.dividerLine}
                        />
                    </View>
            </View>

            {/* Phone Number */}
            <View style={styles.phoneNumberField}>
                <Text style={styles.phoneNumberTitle}>Phone Number</Text>
                <TextInput style={styles.textField} />
                    <View style={styles.imgContainer}>
                        <Image
                            source={require('../../assets/DividerLine.png')}
                            style={styles.dividerLine}
                        />
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        // backgroundColor: "red",
    },
    imgContainer: {
        // alignSelf: 'center',
    },
    userNameField: {
        marginVertical: 10,
    },
    emailAddressField: {
        marginVertical: 15,
    },
    phoneNumberField: {
        marginVertical: 15,
    },
    userNameTitle: {
        marginLeft: 20, 
        marginBottom: 5,
        fontSize: 15,
        color: 'white',
        letterSpacing: 2,
    },
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
    emailAddressTitle: {
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
});