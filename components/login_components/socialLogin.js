import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, Pressable, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
            

            <View style={style.socialButtonsContainer}>

                {/* Google Login */}
                <View style={style.googleLinkContainer}>
                    <TouchableOpacity onPress={show}>
                        <Image source={require('../../assets/GoogleBtn.png')} />
                    </TouchableOpacity>

                    {/* Google Modal Container */}
                    <Modal 
                        visible={visible}
                        onRequestClose={hide}
                        animationType="fade"
                        style={style.modelCon}
                        transparent={true}
                    >
                        <View style={style.centeredView}>
                            {/* <View style={style.modalView}> */}
    
                                {/* Modal Header */}
                                <View style={style.headerCon}>
                                    {/* Close Button */}
                                    <Pressable style={style.closeCon} onPress={() => setIsModalVisible(!isModalVisible)}>
                                        <View style={style.close}>
                                            <Button color="black" title="Hide" onPress={hide} />
                                        </View>
                                    </Pressable>
                                </View>

                                {/* Social Media Icon */}
                                <View style={style.inputCon}>
                                    <View style={style.textCon}>
                                        <Text> Google </Text>
                                    </View>

                                    <View style={style.textCon}>
                                        <Text> Sign in </Text>
                                    </View>

                                    <View style={style.textCon}>
                                        <Text> Use your Google Account </Text>
                                    </View>

                                    <View style={style.viewCon}>
                                        <Text> Use your Google Account </Text>
                                    </View>
                                </View>
                            {/* </View> */}
                        </View>
                        
                    </Modal>
                </View>



                {/* Facebook Login */}
                <View  style={style.facebookLinkContainer}>
                    <TouchableOpacity onPress={show}>
                        <Image source={require('../../assets/FacebookBtn.png')} />
                    </TouchableOpacity>

                    {/* Google Modal Container */}
                    <Modal 
                        visible={visible}
                        onRequestClose={hide}
                        animationType="fade"
                        style={style.modelCon}
                        transparent={true}
                    >

                            <View style={style.centeredView}>
                                <View style={style.modalView}>
                                    
                                        {/* Modal Header */}
                                        <View style={style.headerCon}>
                                            {/* Close Button */}
                                            <Pressable style={style.closeCon} onPress={() => setIsModalVisible(!isModalVisible)}>
                                                <View style={style.close}>
                                                    <Button color="black" title="Hide" onPress={hide} />
                                                </View>
                                            </Pressable>
                                        </View>

                                        {/* Social Media Icon */}
                                        <View style={style.imgCon}>
                                            <Image source={require('../../assets/GoogleBtn.png')} style={style.closeCon}/>
                                        </View>
                                </View>
                            </View>
                    </Modal>
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
    headerCon: {
        backgroundColor: "yellow",
        paddingVertical: "5%",
        paddingHorizontal: "30%",
        marginBottom: "10%",
    },
    closeCon: {
        backgroundColor: "green",
        // flex: 1,
        // paddingHorizontal: "100%"
    },
    centeredView: {
        // flex: 1,
        // justifyContent: 'center',
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: 'center',
        marginTop: "60%",
        backgroundColor: "blue",
        paddingVertical: "18%",
        borderRadius: "40%",
    },
    modalView: {
        backgroundColor: "red",
        marginHorizontal: "10%",
        marginVertical: "10%",
    },
    modelCon: {

    },
    inputCon: {
        paddingVertical: "20%",
        marginTop: "20%",
        paddingHorizontal: "35%",
        paddingVertical: "30%",
        marginVertical: "25%",
        backgroundColor: "red",
    },
    modalViewGoogle: {
        maxHeight: "90%",
        paddingVertical: "80%",
        paddingHorizontal: "40%",
        margin: 20,
        borderRadius: 20,
        padding: 35,
        backgroundColor: "green",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

        
    // Text CSS
    footerText: {
        fontSize: 18,
        color: 'white',
        textAlign: "center",      
        letterSpacing: 2,
    },
})