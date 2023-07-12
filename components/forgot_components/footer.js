import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function Footer() {
    return (
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
    )
}

const styles = StyleSheet.create({
    footerTextCon: {
        alignSelf: 'center',
        marginVertical: 10,
    },
    footerText: {
        color: 'white',
        paddingVertical: 5,
        alignSelf: 'center',
    },
    needHelpCon: {
        backgroundColor: "#4D5C98",
        marginHorizontal: 130,
        marginVertical: 35,
        height: 40,
        borderRadius: 20,
    },
});