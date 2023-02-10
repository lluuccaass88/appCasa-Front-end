import React from 'react';
import {SafeAreaView, ActivityIndicator, ImageBackground, StyleSheet} from 'react-native';

export default function Menu({ navigation }) {
  return (
    
        <SafeAreaView style={styles.loadingView} >

            <TouchableHighlight
            style={styles.button}
            onPress={() => handleLogin()}
            >
            <Text 
                style={styles.buttonText}>
                Login
            </Text>
            </TouchableHighlight>

        </SafeAreaView>
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

