import React, { useRef, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, View, Image, } from 'react-native';

export default function Header() {

    //   // Animation Sequence
    //   const fadeAnim = useRef(new Animated.Value(0)).current

    //   const fadeInOut = () => {
    //       Animated.sequence([
    //           Animated.timing(fadeAnim, {
    //               toValue: 1,
    //               duration: 2000,
    //               useNativeDriver: true,
    //           }),
    //           Animated.timing(fadeAnim, {
    //               toValue: 0,
    //               duration: 1000,
    //               useNativeDriver: true,
    //           }),
    //       ]).start(() => fadeInOut());
    //   };
  
    //   useEffect(() => {
    //       fadeInOut();
    //   },[]);

    return (
        <View>
            <View style={styles.headerContainer}>

                <View style={styles.imgContainer}>
                    <Image source={require('../../assets/HeaderIcon.png')}></Image>
                </View>

                {/* <View.Animated style={{ opacity: fadeAnim }}> */}
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Proceed with</Text><Text style={styles.headerTextTwo}> LOGIN</Text>
                    </View>
                {/* </View.Animated> */}
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
        // backgroundColor: "green",
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