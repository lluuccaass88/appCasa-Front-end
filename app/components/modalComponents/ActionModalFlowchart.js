import React from 'react';
import {SafeAreaView, ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Paint from './comandsFlowchart/Paint';

const overallWidth = Dimensions.get('window').width;


export default function ActionModalFlowchart({ handleClose }) {



  return (
    
        <SafeAreaView style={styles.container} >

          <View style={styles.content}>
            {/* Pintar */}
            <Paint />
            {/* Escolha */}
            {/* Loop */}
            
          </View>

        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: overallWidth - 10,
    height: 500,
    backgroundColor: '#1E1D1D'
  }
})

