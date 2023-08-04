import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

// // Stack Navigation Imports
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Stack Navigation Screens
// import LoadingScreen from '../../login_system/loading_screen'

export default function Footer() {
    return (
        <View style={styles.footerCon}>
            <View style={styles.footerTextCon}>
                <Text style={styles.footerText}> Still having trouble? Get in touch with our customer </Text>
                <Text style={styles.footerText}> support for more information </Text>
            </View>

            <View style={styles.needHelpCon}>
                <Button 
                    title="Need Help"
                    color='white'
                    // onPress={() => navigate('LoadingScreen')}
                />
            </View>
        </View>
    )
}

// const Stack = createNativeStackNavigator();

// export function ForgotStack() {
//   return(
//       <NavigationContainer>
//           <Stack.Navigator
//               screenOptions={{headerShown: false}}
//           >               
//                 <Stack.Screen name="Footer" component={Footer} />
//                 <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
//           </Stack.Navigator>
//       </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
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
});