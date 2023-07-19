import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function LoginOption(navigation) {
  const [login, setLogin] = useState('');
  
    return (
        <View style={styles.loginButtonsContainer}>
            <View style={styles.loginCon}>
                <Button 
                  title="Login"
                  color='white'
                  // onPress={() => navigation.navigate()
                />
            </View>
            
            <View style={styles.supportContainer}>
              <View style={styles.forgotLink}>
                <Button 
                  title="Forgot?"
                  onPress={() => navigation.navigate(ForgotAccount)
                  }
                />
              </View>

              <View style={styles.newUserLink}>
                <Button 
                  title="New User?"
                  onPress={() => navigation.navigate(NewAccount)
                  }
                />
              </View>
            </View>

        </View>
    )
}

const Stack = createNativeStackNavigator();

function LoginStack() {
  return(
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{headerShown: false}}
          >
              <Stack.Screen name="LoginPage" component={App} />
              <Stack.Screen name="ForgotAccount" component={ForgotAccount} />
              <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
              <Stack.Screen name="NewAccount" component={NewAccount} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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