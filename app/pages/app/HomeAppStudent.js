import React, {useContext} from 'react';
import {TouchableHighlight, Text, SafeAreaView,  TextInput, StyleSheet, ImageBackground, Image, Button} from 'react-native';
import AuthContext from '../../contexts/auth'

export default function HomeStudent({ navigation }) {
  const { user, SignOut } = useContext(AuthContext)

  // function handleSignOut(){
  //   SignOut()
  // }

  // <Button title='Sign out' onPress={handleSignOut} />


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
          onPress={() => handleNewGame()}
        >
          <Text 
            style={styles.buttonText}>
            Novo Jogo
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => handleContinue()}
        >
          <Text 
            style={styles.buttonText}>
            Continuar
          </Text>
        </TouchableHighlight>

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

