import React, { useRef, useEffect,} from 'react';
import { StyleSheet, Text, View, Image, Animated, ImageBackground } from 'react-native';
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
            <ImageBackground
                style={styles.imageBackground}
                source={require('../assets/abstract-g981b6ef0a_1280.jpg')}>

              <LinearGradient
                colors={['rgba(0,0,0,0.9)','#38428B']}
                style={styles.pageBackground}
              >
                  {/* Image Container */}
                  <View style={styles.imageContainer}>

                      <View style={styles.textContainer}>
                          <Text style={styles.headerText}>Welcome To Viral Trace</Text>
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
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
      // Containers
      pageBackground: {
        flex: 1,
      },
      imageBackground: {
        flex:1,
        justifyContent: "center",
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
        paddingVertical: 30,
      },

      loadingImage: {
        justifyContent: 'center', 
        flexDirection: 'row',
        marginVertical: 40,
        paddingVertical: 100, 
        paddingHorizontal: 40,
      },

      headerText: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 2.5,
      }
});