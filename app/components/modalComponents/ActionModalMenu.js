import React from 'react';
import {SafeAreaView, ActivityIndicator, ImageBackground, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../contexts/Auth';

export default function ActionModalMenu({ handleClose }) {
  const { SignOut } = useAuth()

  return (
    
        <SafeAreaView style={styles.container} >
          <TouchableOpacity style={{flex: 1, zIndex: 9}} onPress={handleClose}></TouchableOpacity>

          <View style={styles.content}>
            <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}>
              <Icon name="exit-outline" size={25} color="white" onPress={() =>{setVisibleModal(true)}} style={styles.Icon} />
              <Text style={styles.buttonSair} onPress={() => SignOut()}>
                 Sair
              </Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      }, 
      content: {
        height: 300,
        backgroundColor: 'rgba(0,0,0,0.9)',
      },
      buttonSair:{
        fontSize: 20,
        color: 'white', 
        padding: 10
      },
      Icon:{
        marginLeft: 10,
        marginTop: 10
      }
})

