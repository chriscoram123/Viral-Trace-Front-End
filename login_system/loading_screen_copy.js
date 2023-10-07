import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function NeedHelpLoading() {
    return (
        <View style={styles.pageBackground}>
            <LinearGradient colors={['#1D2443','#38428B']} style={styles.pageBackground}>
              
                {/* Container for Image */}
                <View style={styles.imageContainer}>
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
      // Background CSS
      pageBackground: {
        flex: 1,
      },  

      // Containers
      imageContainer: {
        justifyContent: "center",
        marginVertical: 150,
        marginHorizontal: 50,
      },
      textContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 20,
      },

      // Font CSS
      headerText: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 2.4,
      }
});