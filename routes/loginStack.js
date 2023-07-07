import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import App from '../App.js';
import ForgotAccount from '../login_system/forgot_account.js';
import LoadingScreen from '../login_system/loading_screen';
import NewAccount from '../login_system/new_account';

const screens ={
    Login: {
        screen: App
    },
    ForgotAccount: {
        screen: ForgotAccount
    },
    LoadingScreen: {
        screen: LoadingScreen
    },
    NewAccount: {
        screen: NewAccount
    },
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack)