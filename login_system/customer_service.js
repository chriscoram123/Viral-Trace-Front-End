import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function CustomerServiceLoad() {
    return (
        <View style={styles.pageBackground}>
            <LinearGradient
            colors={['#1D2443','#38428B']}
            style={styles.pageBackground}
            >
                {/* Image Container */}
                <View style={styles.imageContainer}>

                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Connecting You To Our</Text>
                        <Text style={styles.headerTextTwo}>Customer Representative</Text>
                    </View>

                    <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 40, 
                        marginVertical: 10,
                    }}>
                        <Image 
                            source={require('../assets/Logo.png')}
                            style={styles.loadingImage}
                        />
                    </View>

                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
      // Containers
      pageBackground: {
        flex: 1,
      },  
      imageContainer: {
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 50,
        position: 'relative',
        top: 0,
      },
      textContainer: {
        justifyContent: 'center',
        paddingVertical: 50,
        marginVertical: 90,
      },
      headerText: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 2.4,
        paddingVertical: 10,
        position: 'relative',
        left: 15,
      },
      headerTextTwo: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 2.4,
      }
});
