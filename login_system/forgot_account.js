import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Components 
import Header from '../components/forgot_components/header';
import InputFields from '../components/forgot_components/inputFields';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigation Screens
import LoadingScreen from '../login_system/loading_screen';
import NeedHelpLoading from '../login_system/loading_screen_copy';


export default function ForgotAccount({ navigation: { navigate } }) {
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
                <View style={styles.loginButtonsContainer}>
                    <View style={styles.cancelCon}>
                            <Button
                                title="Cancel"
                                color='white'
                                onPress={() => navigate('LoginPage')}
                            />
                    </View>

                    <View style={styles.submitCon}>
                            <Button 
                                title="Submit"
                                color='white'
                                onPress={() => navigate('LoadingScreen')}
                            />
                    </View>
                </View>

                {/* Footer Content Component */}
                <View style={styles.footerCon}>
                    <View style={styles.footerTextCon}>
                        <Text style={styles.footerText}> Still having trouble? Get in touch with our customer </Text>
                        <Text style={styles.footerText}> support for more information </Text>
                    </View>

                    <View style={styles.needHelpCon}>
                        <Button 
                            title="Need Help"
                            color='white'
                            onPress={() => navigate('NeedHelpLoading')}
                        />
                    </View>
                </View>
                
            </LinearGradient>
        </View>
    )
}

const Stack = createNativeStackNavigator();

export function ForgotStack() {
  return(
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{headerShown: false}}
          >               
                <Stack.Screen name="ForgotAccount" component={ForgotAccount} />
                <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
                <Stack.Screen name="NeedHelpLoading" component={NeedHelpLoading} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
        pageBackground: {
            flex: 1,
        },

        // Footer CSS
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

        // User Options CSS
        loginButtonsContainer: {
            justifyContent: 'center',
            flexDirection: 'row',
            marginVertical: 40,
        },
        cancelCon: {
            backgroundColor: "#4D5C98",
            marginHorizontal: 30,
            paddingHorizontal: 10,
            maxHeight: 40,
            maxWidth: 100,
            borderRadius: 20,
        },
        submitCon: {
            backgroundColor: "#4D5C98",
            marginHorizontal: 30,
            maxHeight: 40,
            borderRadius: 20,
            paddingHorizontal: 10,
        },
});