import * as React from 'react';
import { TouchableHighlight, Text, SafeAreaView,  TextInput, StyleSheet, ImageBackground, Image} from 'react-native';
import InputValidators from '../services/inputValidators'
import AsyncStorage from "@react-native-async-storage/async-storage";

//import api from '../services/api'
import axios from 'axios';



export default function LoginScreen({ navigation }) {
  const [user_email, setUser_email] = React.useState("patricia@gmail.com ");
  const [user_secret_key, setUser_secret_key] = React.useState("Patricia123");


  return (
    
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.imageBackground}>
      <SafeAreaView style={styles.container}>
      <Image source={require('../assets/disco-voador2.png')} style={styles.imageForeground}/> 
      <Text style={styles.text}>
        Login
      </Text>
        <Text style={styles.label}>
          Email:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUser_email}
          value={user_email}
        />

        <Text style={styles.label}>
          Senha:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUser_secret_key}
          value={user_secret_key}
          secureTextEntry={true}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => login()}
        >
          <Text 
            style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>

      </SafeAreaView>
    </ImageBackground>
    
  )

  async function login(){
    let returnVerf = InputValidators.passwordValidator(user_secret_key)

    if(!InputValidators.emailValidator(user_email)){
      alert("Por favor diite um email valido")
    }else if(!returnVerf.status){
      alert(`Senha incorreta: ${returnVerf.message}`)
    }else{
      const data = {
        user_email,
        user_secret_key,
      };
      try {
        const response = await axios.post('http://10.0.0.115:3333/auth/authenticate', data);
        
        console.log("oi1")

        await AsyncStorage.setItem("token", response.data.token);
        await AsyncStorage.setItem("userId", response.data.user._id)

        console.log("oi2")

        //Para pegar o token - const tokenTest = await AsyncStorage.getItem("token")
        navigation.navigate('HomeAppStudent') //Trocar dps
      } catch (err) {
        alert('Erro no login, tente novamente. '+ err.response.data.Error);
      }
    }
  }
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
  label: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    width: '90%',
    marginTop: 12
  },
  input: {
    height: 45,
    width: '90%',
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20
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