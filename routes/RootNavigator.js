import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../login_system/lets_get_started.js'
import App from '../App.js';
import ForgotAccount from '../login_system/forgot_account.js';
import LoadingScreen from '../login_system/loading_screen.js';
import NewAccount from '../login_system/new_account.js';

// Use this Stack Navigator for faster production and screen transition 
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName=''>
            <Stack.Screen name="LoginPage" component={App} />
            <Stack.Screen name="IntroPage" component={IntroScreen} />
            <Stack.Screen name="ForgotAccount" component={ForgotAccount} />
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="NewAccount" component={NewAccount} />
        </Stack.Navigator>
    );
}

export default RootNavigator;