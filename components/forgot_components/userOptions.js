import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigation Screens
import LoadingScreen from '../../login_system/loading_screen_copy'
// import Login from '../../App';

// Error output "Cannot read property 'navigate' of undefined
function UserOptions() {
    return (
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
                        onPress={() => navigate('Loading')}
                    />
            </View>
        </View>
    )
}

const Stack = createNativeStackNavigator();

function ForgotStack() {
  return(
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{headerShown: false}}
          > 
              {/* <Stack.Screen name="LoginPage" component={Login} /> */}
              <Stack.Screen name="Loading" component={LoadingScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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

export default UserOptions;