import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function SocialLogin () {
    return(
        <>
        <Text style={style.footerText}>Also Login With</Text>

            <View style={style.socialButtonsContainer}>
                <View style={style.googleLinkContainer}>
                {/* <Button 
                    title="Forgot?"
                    style={styles.googleLink}
                /> */}
                    <Image source={require('../../assets/GoogleBtn.png')} />
                </View>

                <View  style={style.facebookLinkContainer}>
                {/* <Button 
                    title="New User?"
                    style={styles.facebookLink}
                /> */}
                    <Image source={require('../../assets/FacebookBtn.png')} />
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    footerText: {
        fontSize: 18,
        color: 'white',
        textAlign: "center",      
        letterSpacing: 2,
    },
    socialButtonsContainer: {
        marginVertical: 20,
        // marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    googleLinkContainer: {
        marginVertical: 10,
        marginHorizontal: 40,
        // backgroundColor: "#4D5C98",
        height: 60,
        maxWidth: 100,
        // borderRadius: 20,
    },
    facebookLinkContainer: {
        marginVertical: 10,
        marginHorizontal: 40,
        // backgroundColor: "#4D5C98",
        height: 60,
        maxWidth: 100,
        // borderRadius: 100,
    },
    footerText: {
        fontSize: 18,
        color: 'white',
        textAlign: "center",      
        letterSpacing: 2,
      },
})