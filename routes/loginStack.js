import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../login_system/lets_get_started'
import App from '../App.js';
import ForgotAccount from '../login_system/forgot_account.js';
import LoadingScreen from '../login_system/loading_screen';
import NewAccount from '../login_system/new_account';


function LoginStack() {
    return(
        // Enable user-friendly screen navigation with the ability to swipe through content
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="IntroPage" component={IntroScreen} />
                <Stack.Screen name="LoginPage" component={App} />
                <Stack.Screen name="ForgotAccount" component={ForgotAccount} />
                <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
                <Stack.Screen name="NewAccount" component={NewAccount} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator(LoginStack);

export default createAppNav(Stack);