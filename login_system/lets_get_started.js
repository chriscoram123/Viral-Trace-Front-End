import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Animated, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Stack Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigation Screens


// Animation functions will go here 
// const load = useRef(new Animated.Value(0)).current // useSharedValue(0)

// const load = useState(new Animated.ValueXY({ x:0, y:0 }))[0]

// Error: Cannot read property 'useState' of null
// const load = useState(new Animated.Value(0))

// useEffect(() => {
//   Animated.timing(load, { 
//     toValue: 1,
//     duration: 5000,
//     useNativeDriver: false,
//    }).start();
// },[load]);

export default function IntroScreen() {
    return (
        <View style={styles.pageBackground}>
            <LinearGradient
            colors={['#1D2443','#38428B']}
            style={styles.pageBackground}
            >
                {/* Image Container */}
                <View style={styles.imageContainer}>

                    <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 100, paddingHorizontal: 40, 
                        marginVertical: 100,
                    }}>
                        <Image 
                            source={require('../assets/Logo.png')}
                            style={styles.loadingImage}
                            resizeMode=''
                        />
                    </View>


                    <Animated.View style={styles.textContainer}>
                        <Text style={styles.headerText}>Lets Get Started</Text>
                    </Animated.View>

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
        // backgroundColor: "red",
        marginVertical: 100,
        marginHorizontal: 50,
        position: 'relative',
        top: 60,
      },
      textContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 50,
        marginVertical: 90,
        // backgroundColor: 'green',
      },

      loadingImage: {

      },
      headerText: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 2.4,
      }
});
