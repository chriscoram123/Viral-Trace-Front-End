import React, { useRef, useEffect,} from 'react';
import { StyleSheet, Text, View, Image, Animated, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


// Animation function will go here 

export default function LoadingScreen() {

    // Animation Sequence
    const fadeAnim = useRef(new Animated.Value(0)).current

    const fadeInOut = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(() => fadeInOut());
    };

    useEffect(() => {
        fadeInOut();
    },[]);

      
    return (
        <View style={styles.pageBackground}>
            <LinearGradient
              colors={['#1D2443','#38428B']}
              style={styles.pageBackground}
            >
                {/* Image Container */}
                <View style={styles.imageContainer}>

                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Welcome To ViralTrace</Text>
                    </View>
                    
                    <Animated.View style={{ opacity: fadeAnim }}>
                      <View style={styles.loadingImage}>
                          <Image 
                              source={require('../assets/Logo.png')}
                              resizeMode=''
                          />
                      </View>
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
        // backgroundColor: "green",
        marginVertical: 150,
        marginHorizontal: 50,
      },
      textContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 20,
      },

      loadingImage: {
        justifyContent: 'center', 
        flexDirection: 'row', 
        paddingVertical: 100, 
        paddingHorizontal: 40,
      },

      headerText: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 2.4,
      }
});