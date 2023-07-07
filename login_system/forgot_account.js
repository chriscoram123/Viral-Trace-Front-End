import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ForgotAccount() {
    return (
        <View style={styles.pageBackground}>
            <LinearGradient
                colors={['#1D2443','#38428B']}
                style={styles.pageBackground}
            >
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Forgot Account?</Text>
                    <Text style={styles.subHeaderTitle}>Choose any one of the following to recover</Text>
                    <Text style={styles.subHeaderTitleTwo}>your account.</Text>
                </View>


                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    {/* Username Input */}
                    <View style={styles.userNameField}>
                        <Text style={styles.userNameTitle}>Username</Text>
                        <TextInput style={styles.textField} />
                            <View style={styles.imgContainer}>
                                <Image
                                    source={require('../assets/DividerLine.png')}
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
                                    source={require('../assets/DividerLine.png')}
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
                                    source={require('../assets/DividerLine.png')}
                                    style={styles.dividerLine}
                                />
                            </View>
                    </View>
                </View>


                {/* User Options */}
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

                {/* Footer Content */}
                <View style={styles.footerCon}>
                    <View style={styles.footerTextCon}>
                        <Text style={styles.footerText}> Still having trouble? Get in touch with our customer </Text>
                        <Text style={styles.footerText}> support for more information </Text>
                    </View>

                    <View style={styles.needHelpCon}>
                        <Button 
                            title="Need Help"
                            color='white'
                        />
                    </View>
                </View>

                
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    // Containers
        pageBackground: {
            backgroundColor: 'purple',
            flex: 1,
        },
        inputContainer: {
            // backgroundColor: "red",
        },
        userNameField: {
            marginVertical: 10,
        },
        emailAddressField: {
            marginVertical: 10,
        },
        passwordField: {
            marginVertical: 10,
        },
        imgContainer: {
            // alignSelf: 'center',
        },
        headerContainer: {
            marginTop: 100,
            marginBottom: 50,
            alignSelf: 'center',
            // backgroundColor: 'green',
        },
        footerTextCon: {
            alignSelf: 'center',
            marginVertical: 10,
        },

    // Input Fields
        userNameField: {
            marginVertical: 15,
        },
        emailAddressField: {
            marginVertical: 15,
        },
        phoneNumberField: {
            marginVertical: 15,
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

    // Text
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
        userNameTitle: {
            marginLeft: 20, 
            marginBottom: 5,
            fontSize: 15,
            color: 'white',
            letterSpacing: 2,
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
        footerText: {
            color: 'white',
            paddingVertical: 5,
            alignSelf: 'center',
        },

    // Buttons
        loginButtonsContainer: {
            justifyContent: 'center',
            flexDirection: 'row',
            marginVertical: 40,
        },
        cancelCon: {
            backgroundColor: "#4D5C98",
            marginHorizontal: 30,
            maxHeight: 40,
            maxWidth: 100,
            borderRadius: 20,
        },
        submitCon: {
            backgroundColor: "#4D5C98",
            marginHorizontal: 30,
            maxHeight: 40,
            borderRadius: 20,
        },
        needHelpCon: {
            backgroundColor: "#4D5C98",
            marginHorizontal: 130,
            marginVertical: 35,
            height: 40,
            borderRadius: 20,
        },
        

});