import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigation Screens

export default function IntroScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current

    const fadeInOut = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(() => fadeInOut());
    };

    useEffect(() => {
        fadeInOut();
    },[]);

    return (
        <View style={styles.pageBackground}>
            <LinearGradient
            colors={['#1D2443','#38428B']}
            style={styles.pageBackground}
            >
                {/* Image Container */}
                <View style={styles.imageContainer}>

                    <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 100, paddingHorizontal: 40, 
                        marginVertical: 100,
                    }}>
                        <Image 
                            source={require('../assets/Logo.png')}
                            style={styles.loadingImage}
                            resizeMode=''
                        />
                    </View>

                    <Animated.View style={{ opacity: fadeAnim }}>
                        <View style={styles.textContainer}>
                            <Text style={styles.headerText}>Lets Get Started</Text>
                        </View>
                    </Animated.View>

                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
      // Containers
      pageBackground: {
        flex: 1,
      },  
      imageContainer: {
        justifyContent: "center",
        // backgroundColor: "red",
        marginVertical: 100,
        marginHorizontal: 50,
        position: 'relative',
        top: 60,
      },
      textContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 50,
        marginVertical: 90,
        // backgroundColor: 'green',
      },

      loadingImage: {

      },
      headerText: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 2.4,
      }
});
