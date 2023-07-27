import React from 'react';
import { StyleSheet, Text, View, Image, Animated, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


// Animation function will go here 

export default function LoadingScreen() {

  // const load = useRef(new Animated.Value(0)).current // useSharedValue(0)

  // useEffect(() => {
  //   Animated.timing(load, { 
  //     toValue: 1,
  //     duration: 2000,
  //     useNativeDriver: true,
  //    }).start();
  // },[load]);

  // Animated.timing(load,{
  //   toValue:{x:200,y:500},
  //   duration:2000
  // })

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

                    <Animated.View style={styles.loadingImage}>
                        <Image 
                            source={require('../assets/Logo.png')}
                            resizeMode=''
                        />
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