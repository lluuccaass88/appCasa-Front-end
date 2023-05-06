import React, {useContext, useEffect, useState} from 'react';
import {TouchableHighlight, Text, SafeAreaView,  TextInput, StyleSheet, ImageBackground, Image, Button, Modal} from 'react-native';
import {useMenu} from '../../contexts/Menu'
import ActionModalMenu from '../../components/ActionModalMenu'
// import GemeScreen from "../pages/app/game/gemeScreen";

export default function HomeStudent({ navigation }) { 
  const { visibleModal, setVisibleModal } = useMenu() //Agora eu preciso descobrir uma forma de quando o visibleModal ficar como true ele disparar uma função

  function handleNewGame(){
    console.log("Novo jogo")
  }
  
  function handleContinue(){
    console.log("continue")
  }
  return (
    <ImageBackground source={require('../../assets/background1.jpg')} style={styles.imageBackground}>
      <SafeAreaView style={styles.container}>
        <Text 
          style={styles.text}
        >
          Vamos Nessa!
        </Text>

        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('GameScreen')}
        >
          <Text 
            style={styles.buttonText}>
            Novo Jogo
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Teste')}
        >
          <Text 
            style={styles.buttonText}>
            Continuar
          </Text>
        </TouchableHighlight>

        <Modal 
          visible={visibleModal}
          transparent={true}
          onRequestClose={ () => setVisibleModal(false)}
        >
          <ActionModalMenu 
            handleClose={ () => setVisibleModal(false)}
          />
        </Modal>
      </SafeAreaView>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground:{
    flex: 1,
  },
  imageForeground: {
    resizeMode: 'stretch'
  },
  text: {
    margin: 25,
    fontWeight: '400',
    fontSize: 40,
    color: "white"
  },
  button: {
    margin: 20,
    padding: 1,
    width: 146,
    height: 35,
    backgroundColor: '#3CDE38',
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
  }
})

