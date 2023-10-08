import React, { useRef, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Button, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigation Screens
import ForgotAccount from './login_system/forgot_account.js';
import LoadingScreen from './login_system/loading_screen';
import NewAccount from './login_system/new_account';

// Stack Component Imports
import InputFields from './components/login_components/loginInputFields';
import Header from './components/login_components/header';
import LoginOptions from './components/login_components/loginOptions';
import SocialLogin from './components/login_components/socialLogin';

export default function Login({ navigation: { navigate } }) {

      // Variable for a fade-in animation"
      const fadeAnim = useRef(new Animated.Value(0)).current;
      const fadeInAnim = useRef(new Animated.Value(0)).current;

      // Animation Sequence 
      const fadeInOut = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(() => fadeInOut());
      };

      // Animation Sequence 
      const fadeIn = () => {
        Animated.sequence([
          Animated.timing(fadeInAnim, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
          }),
        ]).start(() => fadeIn());
      };

      useEffect(() => {
          fadeInOut();
      },[]);

      
  return (
    // <Animated.View style={{ opacity: fadeInAnim}}>
      <View style={styles.pageBackground}>

        <ImageBackground style={styles.imageBackground} source={require('./assets/pexels-neo-2653362.jpg')}>

          <LinearGradient colors={['rgba(0,0,0,0)','#38428B']} style={styles.pageBackground}>

            {/* Header */}
            <Header></Header>

            {/* Input Fields */}
            <InputFields></InputFields>

            {/* Container for Login Elements */}
            <View style={styles.loginButtonsContainer}>

                <Animated.View style={{ opacity: fadeAnim }}>
                  <View style={styles.loginCon}>
                      <Button title="Login" color='white' onPress={() => navigate('LoadingScreen')} />
                  </View>
                </Animated.View>
                
                <View style={styles.supportContainer}>
                  <View style={styles.forgotLink}>
                    <Button title="Forgot?" onPress={() => navigate('Forgot')} />
                  </View>

                  <View style={styles.newUserLink}>
                    <Button title="New User?" onPress={() => navigate('NewAccount')} />
                  </View>
                </View>
            </View>

            {/* Google & Facebook Login */}
            <SocialLogin></SocialLogin> 

          </LinearGradient>
        </ImageBackground>
      </View>
  )
}

const Stack = createNativeStackNavigator();

function LoginStack() {
  return(
      // Enable user-friendly screen navigation with the ability to swipe through content
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}> 
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
    pageBackground: {
      flex: 1,
    },
    imageBackground: {
      flex:1,
      justifyContent: "center",
    },


  // Login Options CSS
    loginButtonsContainer: {
      marginTop: 50,
      marginBottom: 30,
    },
    loginCon: {
        backgroundColor: "#4D5C98",
        marginHorizontal: 130,
        height: 40,
        borderRadius: 20,
    },
    supportContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 15,
    },
    forgotLink: {
        marginHorizontal: 35,
    },
    newUserLink: {
        marginHorizontal: 20,
    },
});