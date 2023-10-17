import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';

export default function SocialLogin () {
    
    // Declared Variables
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };

    return(
        <>
        <Text style={style.footerText}>Also Login With</Text>

            <View style={style.socialButtonsContainer}>
                <View style={style.googleLinkContainer}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Image 
                            source={require('../../assets/GoogleBtn.png')} />
                    </TouchableOpacity>
                </View>

                <View  style={style.facebookLinkContainer}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/FacebookBtn.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({

    // Containers
    socialButtonsContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    googleLinkContainer: {
        marginVertical: 10,
        marginHorizontal: 40,
        height: 60,
        maxWidth: 100,
    },
    facebookLinkContainer: {
        marginVertical: 10,
        marginHorizontal: 40,
        height: 60,
        maxWidth: 100,
    },
        
    // Text CSS
    footerText: {
        fontSize: 18,
        color: 'white',
        textAlign: "center",      
        letterSpacing: 2,
    },
})