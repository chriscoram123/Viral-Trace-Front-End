import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated, ImageBackground, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigation Screens
import Login from '../App'
import ForgotAccount from '../login_system/forgot_account.js';
import LoadingScreen from '../login_system/loading_screen';
import NewAccount from '../login_system/new_account';

function IntroScreen({ navigation: { navigate } }) {

    // Variable for a fade-in animation"
    const fadeAnim = useRef(new Animated.Value(0)).current

    // Animation Sequence
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
            <ImageBackground style={styles.imageBackground} source={require('../assets/pexels-neo-2653362.jpg')}>

                <LinearGradient colors={['rgba(0,0,0,0)','#38428B']} style={styles.pageBackground}>
                    {/* Container for Images */}
                    <View style={styles.imageContainer}>

                        <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 100, paddingHorizontal: 40, marginVertical: 100, }}>
                            {/* Image with Animation */}
                            <Animated.View style={{ opacity: fadeAnim }}>
                                <Image 
                                    source={require('../assets/Logo.png')}
                                    style={styles.loadingImage}
                                    resizeMode=''
                                />
                            </Animated.View>
                        </View>

                        {/* Text Container for Login Button */}
                        <View style={styles.textContainer}>
                            <Button 
                                title="Lets Get Started"
                                color='white'
                                onPress={() => navigate('Login')}
                            />
                        </View>

                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}



const Stack = createNativeStackNavigator();

export default function IntroStack() {
  return(
    // Enable user-friendly screen navigation with the ability to swipe through content
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown:false }}>
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Forgot" component={ForgotAccount} />
            <Stack.Screen name="NewAccount" component={NewAccount} />
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

      // Containers
      imageContainer: {
        justifyContent: "center",
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
      },
      
      // Background CSS
      pageBackground: {
        flex: 1,
      }, 
      imageBackground: {
        flex:1,
        justifyContent: "center",
      },
      
      // Font CSS
      headerText: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 2.4,
      }
});
