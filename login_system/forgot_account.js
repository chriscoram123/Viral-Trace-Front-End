import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/forgot_components/header';
import InputFields from '../components/forgot_components/inputFields';
import UserOptions from '../components/forgot_components/userOptions';
import Footer from '../components/forgot_components/footer';

export default function ForgotAccount() {
    return (
        <View style={styles.pageBackground}>
            <LinearGradient
                colors={['#1D2443','#38428B']}
                style={styles.pageBackground}
            >
                {/* Header Component */}
                <Header></Header>

                {/* Input Field Component */}
                <InputFields></InputFields>

                {/* User Options Component */}
                <UserOptions></UserOptions>

                {/* Footer Content Component */}
                <Footer></Footer>
                
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
        pageBackground: {
            flex: 1,
        },
});