import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, Pressable, Button} from 'react-native';

export default function SocialLogin () {
    
    // Declared Variables
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return(
        <>
        <Text style={style.footerText}>Also Login With</Text>
            
            {/* Error: Pressing on icons disrupts expo's ability to render the application */}
            <View style={style.socialButtonsContainer}>
                <View style={style.googleLinkContainer}>
                    <TouchableOpacity onPress={show}>
                        <Image source={require('../../assets/GoogleBtn.png')} />
                    </TouchableOpacity>
                    <Modal 
                        visible={visible}
                        // onRequestClose={hide}
                        animationType="fade"
                    >
                        <Pressable style={style.closeCon} onPress={hide} />
                            <View style={style.close}>
                                <Button color="black" title="Hide" onPress={hide} />
                            </View>
                    </Modal>
                </View>

                <View  style={style.facebookLinkContainer}>
                    <TouchableOpacity onPress={show}>
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