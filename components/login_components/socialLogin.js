import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigation Screens


export default function SocialLogin () {

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

// const Stack = createNativeStackNavigator();

// export default function IntroStack() {
//   return(
//       <NavigationContainer>
//           <Stack.Navigator
//               screenOptions={{ headerShown:false }}
//           > 
//             <Stack.Screen name="Intro" component={IntroScreen} />
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="Forgot" component={ForgotAccount} />
//             <Stack.Screen name="NewAccount" component={NewAccount} />
//             <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
//           </Stack.Navigator>
//       </NavigationContainer>
//   );
// }

const style = StyleSheet.create({
    footerText: {
        fontSize: 18,
        color: 'white',
        textAlign: "center",      
        letterSpacing: 2,
    },
    socialButtonsContainer: {
        marginVertical: 20,
        // marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    googleLinkContainer: {
        marginVertical: 10,
        marginHorizontal: 40,
        // backgroundColor: "#4D5C98",
        height: 60,
        maxWidth: 100,
        // borderRadius: 20,
    },
    facebookLinkContainer: {
        marginVertical: 10,
        marginHorizontal: 40,
        // backgroundColor: "#4D5C98",
        height: 60,
        maxWidth: 100,
        // borderRadius: 100,
    },
    footerText: {
        fontSize: 18,
        color: 'white',
        textAlign: "center",      
        letterSpacing: 2,
      },
})