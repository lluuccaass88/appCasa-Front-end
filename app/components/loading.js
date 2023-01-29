import React from 'react';
import {SafeAreaView, ActivityIndicator, ImageBackground, StyleSheet} from 'react-native';


export default function Loading({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.imageBackground}>
        <SafeAreaView style={styles.loadingView} >
            <ActivityIndicator style={styles.loading} />
        </SafeAreaView>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
    loading: {
      size: '50%',
      color: '##3CDE38'
    }
})

