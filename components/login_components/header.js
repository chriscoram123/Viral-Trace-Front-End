import React, { useRef, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, View, Image, } from 'react-native';

export default function Header() {
    return (
        <View>
            {/* New Account Header */}
            <View style={styles.headerContainer}>
                
                {/* Header Image */}
                <View style={styles.imgContainer}>
                    <Image source={require('../../assets/HeaderIcon.png')}></Image>
                </View>
                
                {/* Header Text */}
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