import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createAppContainer } from 'react-navigation';


import App from '../App.js';
import ForgotAccount from '../login_system/forgot_account.js';
import LoadingScreen from '../login_system/loading_screen';
import NewAccount from '../login_system/new_account';


// const Stack = createNativeStackNavigator();

export default function LoginStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="App"
                    component={Login}
                />

                <Stack.Screen 
                    name="ForgotAccount"
                    component={ForgotAccount}
                />

                <Stack.Screen 
                    name="LoadingScreen"
                    component={LoadingScreen}
                />

                <Stack.Screen 
                    name="NewAccount"
                    component={NewAccount}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};




// const screens ={
//     Login: {
//         screen: App
//     },
//     ForgotAccount: {
//         screen: ForgotAccount
//     },
//     LoadingScreen: {
//         screen: LoadingScreen
//     },
//     NewAccount: {
//         screen: NewAccount
//     },
// }

// const LoginStack = createStackNavigator(screens);

// export default createAppContainer(LoginStack)