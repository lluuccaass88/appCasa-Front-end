import * as React from 'react';
import { TouchableHighlight, Text, SafeAreaView,  TextInput, StyleSheet, ImageBackground, Image} from 'react-native';

export default function HomeAppStudent({ navigation }) {

  return (
    
    <ImageBackground source={require('../../assets/background1.jpg')} style={styles.imageBackground}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
            Ajude a salvar a Galaxia!
        </Text>
        <Image source={require('../../assets/logo2.png')} style={styles.imageForeground}/> 
        
        <TouchableHighlight
          style={styles.button}
          onPress={() => {navigation.navigate('LoginScreen')}}
        >
          <Text 
            style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {navigation.navigate('RegisterScreen')}}
        >
          <Text 
            style={styles.buttonText}>
            Cadastrar
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
  text: {
    margin: 40,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '450',
    fontSize: 48,
    color: "white"
  },
  imageForeground: {
    resizeMode: 'stretch',
    marginBottom: 40
  },
  button: {
    margin: 10,
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