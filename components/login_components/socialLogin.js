import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';

export default function SocialLogin () {

    const [google, setGoogle] = useState(false);
    const [facebook, setFacebook] = useState(false);

    return(
        <>
        <Text style={style.footerText}>Also Login With</Text>

            <View style={style.socialButtonsContainer}>
                <View style={style.googleLinkContainer}>
                    <Pressable
                        onPress={() => {
                            setGoogle(!google);
                    }}>
                        <Image 
                            source={require('../../assets/GoogleBtn.png')}
                            // {google ? '' : ''}
                        />
                    </Pressable>
                </View>

                <View  style={style.facebookLinkContainer}>
                    <Pressable
                        onPress={() => {
                            setFacebook(!facebook);
                    }}>
                        <Image source={require('../../assets/FacebookBtn.png')} />
                    </Pressable>
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