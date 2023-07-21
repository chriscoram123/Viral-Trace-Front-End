import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


// Animation function will go here 

export default function LoadingScreen() {
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

                    <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 100, paddingHorizontal: 40,}}>
                        <Image 
                            source={require('../assets/Logo.png')}
                            style={styles.loadingImage}
                            resizeMode=''
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

      },
      headerText: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 2.4,
      }
});